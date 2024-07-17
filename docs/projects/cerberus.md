---
sidebar_position: 4
tags: ["Automation", "PYTHON", "DOCKER", "JENKINS", "PYCHARM"]
---

import MarkdownLink from '@site/src/components/link/MarkdownLink';

:::note

I stopped this project when Proton released a got enough desktop app for [ProtonDrive](https://proton.me/drive). I was already paying for an account for their great email service ; hence it was a free addition to my acccount.

:::

# Cerberus

Documents backup script.

<MarkdownLink button
  to='https://github.com/brunopc-net/Cerberus'
  text='Repository'
/><br/><br/>

This project was built to consolidate my knowledge after watching these courses:

- [Jenkins, From Zero To Hero: Become a DevOps Jenkins Master](https://www.udemy.com/course/jenkins-from-zero-to-hero/)
- [Docker Mastery: with Kubernetes +Swarm from a Docker Captain](https://www.udemy.com/course/docker-mastery/) (part 1)

I also wanted to sharpen my Python skills.

I wanted to create something useful and I needed something to automatically backing up my documents from my Raspberry cloud server at home to my [pCloud](https://www.pcloud.com/) family drive.

## Why not syncing my documents to the same pCloud drive with something like [Rclone](https://rclone.org/)? 

The pCloud drive is shared with my family. Sharing a readable copy of my documents poses two main risks:
- Privacy concerns. Some of my documents are very sensitive (like tax reports, critical business work). The privacy risks apply to my family as well as to pCloud entities
- Loss of data, if another family member makes a mistake and delete some of my data, I would potentially lose essential documents

The privacy concern can be worked around as I encrypt my documents with [Cryptomator](https://cryptomator.org/). However, the data loss risk is still a factor.

## Why not syncing documents with something like a free Google Drive then? 

True, if I use a personal Google Drive to sync encrypted version of my documents, I would tackle all the privacy risks mentioned above.

However, there's this other thing. I hate being locked in gradually with one company. Even my financial accounts are all separated (checking account, mortgage, investments...). I always refused to buy Apple products to avoid getting locked in their ecosystem. Then I bought my first Android phone and started using Google apps. Ironically, I started to be locked in as much as I would with Apple. The only difference was it was more on the software side.

I decided years ago to free myself of any big tech giant. They represent a risk to my individual freedom as well as the risk they pose on our digital collective freedom. [#Heal the web](https://twitter.com/dhh/status/1212769409451864064)

There is also another risk: the risk of myself deleting a document that shouldn't have been deleted. If I use something like Rclone to sync with pCloud or Google Drive, I still need regular backups to cover the risk of my personal human error.

## Risks covered

Hence this project. My documents are covered from:<br/>
✔️ Hardware destruction (fire, flooding)<br/>
✔️ Property theft<br/>
✔️ Human manipulation error (from me of a member of my family)<br/>
✔️ pCloud failure that would compromise the integrity of my data<br/>
✔️ pCloud data hacking that would pose a risk on my privacy<br/>

I also have a third copy of my data that I update yearly. It covers the risk of human error even further if I delete some document I shouldn't and I don't realize it in the following 24h window.

Also, that third copy covers off the -very slim- probability of a Cryptomator bug that corrupts my encrypted data. That third copy is encrypted with another software (7zip).

## Risks still remaining

❌ If I delete an important document, it's been >24h, and that document wasn't part of the last yearly backup 

That's why I'm thinking adding last week/last month/last quarter backup capabilities to Cerberus.