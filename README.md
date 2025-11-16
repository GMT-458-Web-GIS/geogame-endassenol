
⭐– Who Wants to Be a Geographer? – (Planned Design Version)
🌍 Project Description

This document presents the planned design, structure, and intended features of the GeoGame project developed for the GMT 458 – Web GIS course.
This README does not describe the final or fully implemented version of the game, but rather the intended gameplay, mechanics, and design goals.

The game is inspired by the “Who Wants to Be a Millionaire?” format and is designed as an interactive, geography-based quiz that uses a web map as the core visual component.

🎯 Game Concept 

The game is designed to include 15 multiple-choice questions about world geography.
For each question, the user will see a map-based visual clue—such as a marker, polygon, zoomed region, or comparison between two locations—and must answer using these geographic hints.

This concept aims to satisfy GeoGame requirements, including:

A geo-component (interactive map)

User interaction

A time-based challenge

⏱️ Temporal Component 

Each question is intended to have a 20-second countdown timer.

If the timer reaches zero, the answer will be marked as incorrect.

This time limitation satisfies the required temporal component for the assignment.

❤️ Life System 

The game is planned to include a simple life mechanic:

The player starts with 2 lives

Every incorrect answer removes 1 life

If all lives are lost, the game ends early

This system is designed to increase difficulty and add tension to the gameplay.

🧠 Hint / Joker System 

The game is planned to include three single-use hint buttons, each offering a different advantage to the player.

🔍 1. Zoom Hint

Automatically zooms the map into the region relevant to the question, providing stronger spatial context.

❌ 2. 50:50 Hint

Eliminates two incorrect options, leaving the player with only two possible answers.

⏱ 3. Time +10

Adds +10 seconds to the current question’s countdown timer.

Note: The exact implementation of these hints may vary during development.

🌍 Question Types

Questions are intended to cover a wide range of world geography topics, including:

Country identification (marker → choose the country)

Capital city recognition

Continent or region questions

Spatial comparisons (e.g., “Which city is farther north?”)

Famous landmarks (e.g., near Eiffel Tower, Pyramids, Big Ben)

Islands, peninsulas, mountain ranges

Distance / relative location clues

All questions will be tied to a geographical element displayed on the map.

🎮 Game Flow

Start screen → “Start Game” button

Question appears → map shows the related spatial clue

Player selects an answer within the time limit

Score, time, lives, and hints are updated

Process repeats for all 15 questions

Final score screen is shown

This flow represents the intended gameplay loop.

🖥️ User Interface (UI)

The interface is planned to be divided into two main areas:

🔹 1. Map Area

Implemented using OpenLayers

Displays markers, polygons, or zoomed regions

Allows basic interactions such as pan and zoom

🔹 2. Question Panel

Displays the question text

Four answer buttons (A, B, C, D)

Countdown timer

Life indicators

Hint (joker) buttons


### Game Start Screen (Mockup)

```text
 --------------------------------------------------------
|                                                        |
|            🌍 WHO WANTS TO BE A GEOGRAPHER?           |
|                                                        |
|                 (World Geography Quiz Game)            |
|                                                        |
|     ------------------------------------------------     |
|     |                  START GAME                    |   |
|     ------------------------------------------------     |
|                                                        |
|        ⭐ 15 geography questions                       |
|        ⭐ 2 lives                                      |
|        ⭐ 20 seconds per question                      |
|        ⭐ 3 Lifelines: Zoom Hint – 50:50 – +10s        |
|                                                        |
|     -----------------------------------------------     |
|     |                 HOW TO PLAY                    |   |
|     -----------------------------------------------     |
|                                                        |
|                          v1.0                          |
 --------------------------------------------------------



🧰 Technologies

The project is expected to use:

HTML5 – game layout

CSS3 – styling

JavaScript (Vanilla JS) – logic, scoring, timer, hints

Leaflet – map interactions and geographic visualization

🔧 Technical Structure

The technical design includes:

Questions stored in a JavaScript array

Dynamic map updates for each question

20-second countdown timer

Single-use hint buttons

Score and life tracking

Final results screen

Specific implementation details may be adjusted during development.

⚠️ Important Note

This README represents the planned and intended design of the game.
Certain features, mechanics, or visual elements may change during the development process depending on technical feasibility and project progress.



Documenting the intended use of web technologies
