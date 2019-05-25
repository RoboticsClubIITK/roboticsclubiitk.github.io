---
layout: post
title: Four years in a nutshell
comments: true
author: Swati Gupta, Y14, EE || Member Robocon and IGVC.
excerpt_separator: <!--more-->
---
Today, I would like to share with you, my journey at IIT Kanpur so far. Perhaps along the way, you will end up finding something fascinating enough to pursue, or else you just might learn not to make the same mistakes. Either way, It will be a worthwhile endeavor. I don't generally write blogs, so I am not very sure how to go about this one. I will just try to make it an interesting read, and highlight the 4 major decisions I made ( branch selection, Robocon-IGVC, Summer Internship, Placements). If you find any of them less interesting, just skip the corresponding section and there will be no loss of continuity.
<!--more-->

### Branch Selection
I picked Electrical Engineering, under the advice of family and ‘knowledgeable’ relatives because it is a ‘core’ branch and you cannot go wrong with that. I guess, now when I look back upon this decision, that it was not a very wise one, yet it has shaped a lot of my choices, including many that I am proud of. So, I would say, It was also not a bad one either. This is important to note, for life is full of choices and the ones we make decide a lot for us. Yet, getting disheartened by a ‘wrongly’ made choice is not good, for the idea of ‘wrong’ or ‘right’ is always subjective.

### Robocon-IGVC
My first year, I tried many different things, and soon realised that cult or sports were not my forte. I enjoyed work in the tech club workshops, and takneek, though we failed miserably in the actual electronics event. It helped though, for I got selected in Team Robocon. Suddenly, I had lots to do, and so little time for anything else. The first big lesson that IITK teaches you is Time management, and setting your priorities.

I have been a part of this team for more than 3 years now. During this time, it has changed in name and form. I do not know when, but it became perhaps the best part of my life here. Surrounded by the best of people, I have felt very fortunate. By making a very bold decision to switch to another competition (IGVC) under our leadership, we brought about an end to an era and the start of another. The learning curve steeped at this time, for everything was new and a lot had to be learned from scratch. Automation in robotics is one of the most exciting avenue today, and self driving cars have become a hot trend. This was one step in that direction.

As one of the heads of the computer vision module, we worked on developing the full vision stack for an autonomous ground vehicle.
Let me explain the problem statement in brief, and then go through the full vision pipeline in an overview.

The task is to develop a completely autonomous ground vehicle, capable of navigating on a grassy arena while following white chalk lanes, avoiding obstacles and using GPS waypoints, all the while planning an optimal path by mapping its surroundings. The vision module deals with collecting lane information using camera feed, obstacle information using LIDAR feed and utilising the two create an online visual map of the surroundings, which can later be fused with robot pose and GPS coordinates to create a full global map. Certainly, the task is challenging. We learned to use ROS (robot operating system) and OpenCV as the first step. The full vision pipeline (simplified) in the end looked something like this:

raw camera feed-->

                               remove obstacles --> convert to top view--> detect lanes --> convert to laserscan

lidar point cloud -->

Each node in the above flow graph involved a lot of collective effort. The problem of detecting lanes is an open problem, with many possible ways of attempt. Many of them look good in theory, but fail spectacularly in an open environment and grass background! After a lot of testing, we came up with a few working solutions, but a lot more work can still be done here.

### Summer Intern
You must realise that 3rd year was a frenzied year for me. Internship season begins at the starting of 5th sem. At this point, I knew I was interested in robotics, but we had still not switched to IGVC (that would take place in late october). I had to either sit for SPO internship season, or apply for academic research. So I decided to ‘try’ the internship season first. And got selected for ITC on day 1! This was an extremely unexpected scenario, and I no longer knew what to do. I now think one should never be this lax while deciding the course of their lives, for an Internship matters a great deal during placements or college applications. I clearly had no interest or aptitude for the kind of work at ITC, and yet kept going head along.

Only later, by chance, I applied for a research position at UT Dallas through Office of International Relations (which allows you an spo waiver). This is how I ended up at the Dept of CS , UT Dallas during summers. I got lucky, but with my resume and work, I could have gotten better opportunities had I not taken the spo intern. I would like to advice you all to judge yourself better, and make informed decisions, instead of just going with the flow.
Let me give you a brief overview of my summer intern project at UT Dallas. I worked in a project in Natural Language Processing (It is a very interesting field of research and has obvious overlap with robotic applications). The aim was to build cross document storylines, given a wikinews corpus, so that an end user can find what happened, to whom and when, without having to go through all of the news corpus.
First, all event mentions relevant to the target entity must be extracted from the news documents. This is done via coreference resolution, to ensure that implicit mentions are also captured along with the explicit ones.
For Ex: Steve Jobs <EVENT>cofounded</EVENT> Apple in 1976. He <EVENT>died</EVENT>in 2011.
Here the target entity is ‘Steve Jobs’, with an explicit mention in the first sentence, and an implicit one in the next sentence.
Next, The Time mentions have to be resolved by temporal tagging. ‘Last Monday’ has to be extrapolated using the document creation date to the proper dd—mm—yy format to be used in the timeline.
Next and the most important step is relation extraction. Linking correct time mentions to event mentions can be ambiguous in many cases where a single sentence can contain multiple event and time mentions.
For ex: He <EVENT>fought</EVENT> pancreatic cancer in 2004 and <EVENT>took</EVENT>
six months off in early 2009.
Here ‘fought’ links to 2004 and ‘took’ links to 2009. Mixing these two will be quite damaging.
An inherent and intuitive way to visualise a link and extract a relation in natural language is through trees. I therefore used tree kernels (like the Subset Tree Kernels) and tree structures like Dependency Trees (Grammatical Relations and words/lemmas tree) along with some flat features to train an SVM classifier for this purpose.
After lemma clustering to ensure that duplicate entries are not made in the timeline, the events are then ordered in time to create the final timeline.
The timeline using the two example sentences used above would therefore look something like this:

Steve Jobs:
* 1976 Cofounded
* 2004 fought
* 2009 took
* 2011 died
* etc.

### Placements
I will end this with a brief account of my placement experience. At the end of my Intern, I had decided to sit for placements, after a lot of due consideration. The semester was one hell of a ride, what with PPT’S and tests just about everyday. I would like to advise you all, the ones who intend to sit for placements and target software based profiles, to take the Data Structures course and practice coding seriously, for that is a huge part of the test process. As for interviews, your work (In my case: Robocon, IGVC and Intern) will matter a lot as well. For more placement fundae, contact me directly, as I will not go into too much detail here. The end result was that I got placed at Juniper Networks (I did various interesting courses this sem, one of which was computer networks, hence my interest. PS: Take good Open Electives instead of just trying to finish the credits, they help you explore a lot). I believe this is only the beginning though.
Thanks for reading and All the best!
