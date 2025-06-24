# Create an empty git repo
git init


# Set my git user name and email
git config user.name "test"
git config user.email "a@a.com"


# Create and switch to a new branch named develop
git checkout -b develop


# Commit all new and updated files to this branch
git add .
git commit -m "msg"


# Push this branch to the remote repository
git push -u origin develop


# Switch back to the main branch
git checkout main


# Merge the develop branch into the main branch
git merge develop


# Rebase the main branch onto the develop branch
git checkout develop
git rebase main


# Revert last commit
git reset --hard HEAD~1

# Revert last commit and keep changes
git reset --soft HEAD~1


# Archive the current branch
git archive -o archive.zip HEAD

# Archive the current branch and exclude the .gitignore files
git archive -o archive.zip HEAD—. ':!*.gitignore'

# Remove all merged branches
git branch—merged | grep -v "\*" | xargs -n 1 git branch -d


# Delete myfeature branch on local and remote
git branch -d myfeature
git push origin—delete myfeature


# Delete untracked local files from the current working tree
git clean -f