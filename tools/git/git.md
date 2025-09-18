### GIT

---

### Revert Code

```bash
git revert HEAD             # Create a new commit that reverts all changes
git reset --mixed HEAD~1    # Remove the last commit, keep changes in working directory (unstaged)
git reset --soft HEAD~1     # Remove the last commit, keep changes staged
git reset --hard HEAD~1     # Remove the last commit and discard changes completely
```

---

### Branch

```bash
git push origin --delete [branch_name] # Delete a remote branch
```

---

### Configuration

```bash
git config --list                           # Show config list
git config --global user.name "username"    # Set username
git config --global user.email "email"      # Set email

git config --global credential.helper store # Save login credentials
git config --global color.ui auto           # Enable colored output in terminal
```

---

### SSH

```bash
ssh-keygen -t ed25519 -C "email"   # Generate SSH key
cat ~/.ssh/id_ed25519.pub          # Print public key
# Copy and add it to GitHub → Settings → SSH & GPG keys → New SSH Key
```

---

### Statistics

```bash
# Simple stats: total insertions/deletions per author
git log --no-merges --pretty=format:%an --numstat \
| awk '/./ && !author { author = $0; next } author { ins[author] += $1; del[author] += $2 } /^$/ { author = ""; next } END {
  for (a in ins) {
    printf "%10d %10d %10d %s\n", ins[a] - del[a], ins[a], del[a], a
  }
}' | sort -rn

# Detailed stats
git log --no-merges --shortstat --pretty="%cE" \
| sed 's/\(.*\)@.*/\1/' \
| grep -v "^$" \
| awk 'BEGIN { line=""; } !/^ / { if (line=="" || !match(line, $0)) {line = $0 "," line }} /^ / { print line " # " 0; line="" }' \
| sort \
| sed -E 's/# //;s/ files? changed,//;s/([0-9]+) insertions?\(\+\), ([0-9]+) deletions?\(-\)/\1 \2/' \
| awk 'BEGIN {name=""; files=0; insertions=0; deletions=0;} {
  if ($1 != name && name != "") {
    print name ": " files " files changed, " insertions " insertions(+), " deletions " deletions(-), " insertions-deletions " net";
    files=0; insertions=0; deletions=0; name=$1;
  }
  name=$1; files+=$2; insertions+=$3; deletions+=$4
} END {
  print name ": " files " files changed, " insertions " insertions(+), " deletions " deletions(-), " insertions-deletions " net";
}'

# Custom styled graph
git config --global alias.styled-graph "log --all --graph --pretty=format:'%Cgreen%ad%Creset %C(auto)%h%d %s %C(bold blue)<%aN>%Creset' --date=format-local:'%Y-%m-%d %H:%M (%a)'"

git styled-graph
```

---
