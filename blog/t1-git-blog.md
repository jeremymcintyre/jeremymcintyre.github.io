<!-- This template is in markdown, not html, so
  it will not render beautifully when you copy and
  paste it into your github.io site, but it will at
  least be published. Next week you'll be creating a
  blog template using HTML and CSS and you'll be able
  to copy and paste the blog posts from week 1 in there
  to make them pretty next week.

  For now, please replace the title, subtitle (if desired),
  and date with the text you would like. Markdown is pretty
  simple, so you can just feel free to type. =) -->


# Do you git it?
#### Don't even want to hazard a guess how many times that pun has been made.
#### October the 9th, 2014

Git is awesome. As a newb, I think the most important place to start is there.  You'll like learning about it. It's clever, it's helpful, and it has a super-cool online friend that goes by the name of GitHub. More on their friendship in a bit.

"Why," you ask, "is git so awesome? What is it?"

Git is a piece of software that does version control. It tracks and keeps a nice, orderly history of all the changes made to a project over time. That history is navigable, so you can go back to earlier versions if stuff goes haywire -- or if you just want to figure out why a particular change was made. It also protects against total loss of a project, because there is always the nice string of previous versions to fall back on.

Let's say you have a document that you email to a bunch of friends to review. Meanwhile, you continue editing your copy. They edit their copies, send back their edited files, and now you have some work to do. You need to read through and find/figure out what each one changed, whether they overlap with changes you've been making, etc. Then you need to decide which changes to keep, and manually work them into your file.

Let's run through the same process again, this time with the help of git:
- You have a master copy of the file.
- You send copies to your friends, and continue making your own edits on another copy (a branch) -- not the master!
- Each friend sends you their edited file, but git doesn't show you the whole file; it only shows you the specific changes that they made, and where they made them.
- For each copy, git lets you review and "stage" only the changes you wish to keep. Then you "commit" (save) the changes and push the changes to the master.  The master file updates with the new changes and becomes a new "version" of the project. Then you review the next friend's edits, and repeat until you've integrated all changes that you want.
- Because git tracks changes, you can later go back to what the document looked like before (think of it as "without") each set of changes, "after" (think of it as "with") each set of changes, what exactly the changes were, etc.

If this is still not quite making sense, think about what a project is, in an abstract sense. Better yet, think of LEGOs. Someone figured out how to make that really cool LEGO castle that you had as a kid (or still have, I'm not judging).  They didn't build it in its final form on the first try. They built it up, then figured "that tower doesn't look good right there," then unbuilt it a bit, then built it up some more...until it was a finished product. Then you bought the product (yes you did), complete with a manual. The manual is what git would have made, if it could track LEGOs; it is the history of all the small changes to the project that the designer decided to keep and implement. If your little sister came along and knocked over one of the turrets, all would not be lost; you could still refer back to the history of the changes (the manual) and rebuild from there.

Alright, I think now we get what git does and why it's clever to track only deltas/changes.

Now let's talk about the cool online friend, GitHub. The easiest way to do this would be to extrapolate the document-editing example a bit. Imagine you are now working on a project instead of a document - one with many files and folders. It has many components to it, and about a hundred people working on it. All of a sudden, using git is no longer "advantageous," it's necessary - without version control, there's no feasible way to keep track of all the work being done on the project. But even using git doesn't seem to be enough; the master version of the project still lives on your computer, and you have to keep sending the updated versions of the project out for all those people to work on. You don't have time for much else. Just kidding, you do.

Because GitHub.

GitHub is cool for many reasons, not least of which because it hosts your beautiful master projects online, along with all the version history. Instead of going through your computer, anyone can "clone" a copy (branch) of the online master to their local machine, "pull" updated changes from the remote online master, "push" their own changes to the project, have them reviewed, commented on, or otherwise vetted before being merged into the master -- and all this can happen in an orderly fashion in real time, without you having to do all the legwork and hosting on your own machine. Further, GitHub lets you tack on licenses to your projects to clarify what people are and aren't allowed to do with your stuff. It's a social, collaborative, and even career-building tool since you can show others your online portfolio. It's also a great learning tool, because you can look at really smart people's code, get ideas, find inspiration, and even play around with an open source project's code and try to become a contributor.

And that's GitHub, in a nutshell.

So don't be scared of git or GitHub! They are and will be your friends, especially if you are thinking of becoming a developer.  Plus, they aren't that complicated to learn, and there are tons of helpful videos and articles out there to get you started.

Thanks for reading!