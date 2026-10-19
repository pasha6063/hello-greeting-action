const core = require('@actions/core');
const github = require('@actions/github');

try {
  const name = core.getInput('name');
  const greeting = `Hello, ${name}!`;

  core.setOutput('greeting', greeting);
  core.info(greeting);

  core.info(
    `Repository: ${github.context.repo.owner}/${github.context.repo.repo}`
  );
} catch (error) {
  core.setFailed(error.message);
}
