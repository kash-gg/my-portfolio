import React from "react";
import { Dock, DockIcon } from "./magicui/dock";
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "./ui/tooltip";
import { DATA } from "../data/resume";
import { cn } from "../lib/utils";

export default function Navbar({ darkMode, toggleDarkMode }) {
    const handleScroll = (e, href) => {
        e.preventDefault();

        if (href === "#contact") {
            const footer = document.querySelector("#contact");
            if (footer) {
                footer.scrollIntoView({ behavior: "smooth" });
            }
            return;
        }

        const wrapper = document.querySelector("#horizontal-wrapper");
        if (!wrapper) return;

        const sectionProgress = {
            "#home": 0,
            "#about": 0.25,
            "#projects": 0.5,
            "#skills": 0.75,
            "#certifications": 1.0
        };

        if (sectionProgress.hasOwnProperty(href)) {
            const progress = sectionProgress[href];
            const scrollableHeight = wrapper.offsetHeight - window.innerHeight;
            const targetScroll = wrapper.offsetTop + (progress * scrollableHeight);

            window.scrollTo({
                top: targetScroll,
                behavior: "smooth"
            });
        }
    };

    return (
        <TooltipProvider delayDuration={0}>
            <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14 justify-center">
                <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
                <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
                    {DATA.navbar.map((item) => (
                        <DockIcon key={item.href}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href={item.href}
                                        onClick={(e) => handleScroll(e, item.href)}
                                        className={cn(
                                            buttonVariants({ variant: "ghost", size: "icon" }),
                                            "size-12"
                                        )}
                                    >
                                        <item.icon className="size-4" />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <span>{item.label}</span>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                    <Separator orientation="vertical" className="h-full" />
                    {Object.entries(DATA.contact.social)
                        .filter(([_, social]) => social.navbar)
                        .map(([name, social]) => (
                            <DockIcon key={name}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <a
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={cn(
                                                buttonVariants({ variant: "ghost", size: "icon" }),
                                                "size-12"
                                            )}
                                        >
                                            <social.icon className="size-4" />
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <span>{name}</span>
                                    </TooltipContent>
                                </Tooltip>
                            </DockIcon>
                        ))}
                </Dock>
            </div>
        </TooltipProvider>
    );
}
