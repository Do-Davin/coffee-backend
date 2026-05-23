# SSH Commands

## Check existing SSH keys

ls ~/.ssh

## Test GitHub SSH login

ssh -T git@github.com

Expected result:

Hi Do-Davin! You've successfully authenticated, but GitHub does not provide shell access.

## Connect to future server

ssh root@YOUR_SERVER_IP

## Connect using SSH config name

ssh coffee-server

## Important safety rule

Never share your private key.

Private key example:

~/.ssh/id_ed25519

Public key example:

~/.ssh/id_ed25519.pub
