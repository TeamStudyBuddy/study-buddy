# Contributing to Study Buddy

Thanks for helping improve Study Buddy. You can contribute code, fix a bug, improve the interface, update the docs, or suggest something that would make studying easier.

## Before you start

Check the [existing issues](https://github.com/TeamStudyBuddy/study-buddy/issues) and pull requests to see whether someone is already working on the same thing.

For a bigger feature or a change to how the app works, open an issue first so we can discuss it. Small fixes can go straight to a pull request.

## Set up locally

1. Fork the repository on GitHub.
2. Clone your fork and create a branch:

   ```bash
   git clone https://github.com/YOUR_USERNAME/study-buddy
   cd study-buddy
   git switch -c fix/short-description
   npm install
   ```

3. Follow the environment setup in [README.md](README.md#getting-started). For seven-day login sessions, use `JWT_EXPIRE=7d`.
4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:5500](http://localhost:5500).

## Making changes

- Follow the style of the files you're editing.
- Keep each pull request focused on one change.
- Keep the frontend in plain HTML, CSS, and JavaScript.
- Check your interface changes on mobile and desktop, in both light and dark mode.
- Update the README if your change affects setup or adds a feature.
- Keep API keys, environment files, and personal database contents out of commits.

## Checking your work

There isn't an automated test suite yet. Before opening a pull request, check the parts of the app your change affects and look for errors in the browser console and server output.

For changes that touch several parts of the app, check:

- Account creation, login, and logout.
- Adding, completing, and deleting tasks, including persistence after a reload.
- Starting, pausing, and resetting the study timer.
- Music playback and controls.
- AI chat with a valid Gemini API key.
- Theme switching and whether the selected theme survives a reload.
- Navigation, browser back/forward buttons, and the mobile menu.

## Opening a pull request

Commit your changes with a clear message and push your branch to your fork. Then open a pull request against the original repository's default branch.

Include:

- What changed and why.
- How you checked it.
- Screenshots for interface changes.
- A link to the related issue, if there is one.

## Reporting bugs and suggesting features

Open an [issue](https://github.com/TeamStudyBuddy/study-buddy/issues). For bugs, include the steps to reproduce the problem, what you expected, what happened, and your browser or device details. Screenshots and error messages help too; remove any private information before sharing them.

For feature ideas, explain what you'd like to do and how it would help someone using Study Buddy.

## Working together

Be respectful, give useful feedback, and leave room for people who are still learning.

By contributing, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).
