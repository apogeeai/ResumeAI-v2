/*
  # Create Resumes Schema

  1. New Tables
    - `resumes`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `personal_info` (jsonb)
      - `experience` (jsonb[])
      - `education` (jsonb[])
      - `skills` (text[])
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `resumes` table
    - Add policies for authenticated users to manage their own resumes
*/

CREATE TABLE IF NOT EXISTS resumes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  personal_info jsonb NOT NULL DEFAULT '{}'::jsonb,
  experience jsonb[] NOT NULL DEFAULT '{}'::jsonb[],
  education jsonb[] NOT NULL DEFAULT '{}'::jsonb[],
  skills text[] NOT NULL DEFAULT '{}'::text[],
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE resumes ENABLE ROW LEVEL SECURITY;

-- Policy for users to read their own resumes
CREATE POLICY "Users can read own resumes"
  ON resumes
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Policy for users to insert their own resumes
CREATE POLICY "Users can insert own resumes"
  ON resumes
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Policy for users to update their own resumes
CREATE POLICY "Users can update own resumes"
  ON resumes
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Policy for users to delete their own resumes
CREATE POLICY "Users can delete own resumes"
  ON resumes
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to call the update function
CREATE TRIGGER update_resumes_updated_at
  BEFORE UPDATE ON resumes
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();