"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, LogIn } from "lucide-react";
import { AnimatedLogo } from "./animated-logo";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const resourceLinks = [
  {
    title: "Resume Examples",
    description: "Industry-specific resume samples",
    items: [
      { name: "Software Engineer", href: "/samples/software-engineer" },
      { name: "Product Manager", href: "/samples/product-manager" },
      { name: "Data Scientist", href: "/samples/data-scientist" },
      { name: "UX Designer", href: "/samples/ux-designer" },
    ],
  },
  {
    title: "Learning Center",
    description: "Expert guides and resources",
    items: [
      { name: "ATS Optimization Guide", href: "/guides/ats-optimization" },
      { name: "Skills Database", href: "/resources/skills" },
      { name: "Resume Templates", href: "/templates" },
    ],
  },
  {
    title: "Career Tools",
    description: "Tools for career growth",
    items: [
      { name: "Salary Calculator", href: "/tools/salary" },
      { name: "Interview Prep", href: "/tools/interview" },
      { name: "Career Path Guide", href: "/guides/career-path" },
    ],
  },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-white/85 dark:bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/85 dark:supports-[backdrop-filter]:bg-background/85">
      <div className="container">
        <div className="max-w-[1250px] mx-auto flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <AnimatedLogo className="text-xl font-bold" />
          </Link>

          <div className="flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/resume" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Resume Builder
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/cover-letter" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Cover Letter
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/ats-score" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      ATS Score
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] grid-cols-3 gap-8 p-6 bg-white/85 dark:bg-background/85 backdrop-blur-xl">
                      {resourceLinks.map((section) => (
                        <div key={section.title} className="space-y-3">
                          <div>
                            <h4 className="text-base font-semibold text-foreground">{section.title}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{section.description}</p>
                          </div>
                          <ul className="space-y-2">
                            {section.items.map((item) => (
                              <li key={item.name}>
                                <Link 
                                  href={item.href} 
                                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-4">
              <ModeToggle />
              <Button variant="ghost" size="sm" className="gap-2">
                <LogIn className="h-4 w-4" />
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 