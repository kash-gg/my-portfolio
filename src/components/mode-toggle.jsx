import React from 'react';
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export function ModeToggle({ darkMode, toggleDarkMode }) {
    return (
        <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="size-12 rounded-full">
            {darkMode ? (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
