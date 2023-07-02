# NextJS Boilerplate

This project aims to be the boilerplate for new NextJS applications. It is possible to create projects with CI/CD, tests, and storybooks, among other things already configured.

## CI/CD

This Boilerplate uses **dependabot** tool to check (monthly) all existing updates for all dependencies used in this project.

It is possible to check its configuration by reading the file .github/dependabot.yml

That file was created using the GitHub inner tool located at "Menu insights" > "Dependency graph" > "Dependabot" > "Create" (button).

When the Dependabot identifies some update, it'll create a Pull Request to notify about it. For every Pull Request, GitHub will run its workflow called "dependency-review.yml".

It was created using "Menu Action" > "New workflow" > "Dependacy Review workflow".
