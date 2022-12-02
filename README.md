<div align="center">
  <img src="./src/img/logo-color.webp" alt="Kris Doyon logo" style="height:150px">
</div>

**My personal web developer portfolio website, built using React.**

- The live site is available to view and use at: https://krisdoyon.com

# Table of Contents

1. [Overview](#overview)
2. [Things Learned](#things-i-learnedpracticed)
3. [Technologies used](#technologies-used)
4. [Challenges](#challenges)
5. [Screenshots](#screenshots)

# Overview

# Things I Learned/Practiced

- Using intersection observer API
- First time using React Router in an independent project
- Using context API and a custom hook to manage global state
- Lots of ongoing refactoring with this project since starting my coding journey

# Technologies used

- React
- React Router
- Context API
- Intersection Observer API
- Sass

# Challenges

A challenge that I faced with this project was handling intersection observer events to reveal sections on scroll and hilight the active nav button in an efficient way. I started with a lot of duplicate code before I landed on the solution of a common Section component used for each section with a useEffect call to add each intersection observer. I used the context API to manage the current active nav section in the global state accessible by all section components. I also learned more about specific intersection observer properties such as root margin working through the implementation of this feature.

# Screenshots
