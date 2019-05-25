---
layout: post
title: Scoring a job through Robotics Internship
comments: true
author: Lakshay Garg, EE, Y13 || Former member of Robocon, Also worked on IGVC.
excerpt_separator: <!--more-->
---
##### When you plan it right!

This blog post is about my experience while developing a C++ library for motion
planning during my third year “internship”. This is about how after failing to
secure an internship for summers, I try to rescue my self-confidence by taking up
an ambitious summer project. Going in a direction orthogonal to what was
planned and finally making something I am proud of. This is both, my
experiences and a very short introduction to the library I developed.
<!--more-->

Almost an year ago from now (03-07-2017 11:10 PM), the beginning of the
summer break, I was at one of the lowest points during my stay at IIT Kanpur. I
had applied to only three companies for internship through the SPO and was not
able to secure an internship since two of them decided to not take any student
and was rejected by the third after an interview. Looking back at that time is
amusing now and often forms the larger part of all the internship/placement
fundae that I give to my juniors.

To utilize my summer productively, I decided to work on a project with
[Dr. Bhaskar Dasgupta](http://home.iitk.ac.in/~dasgupta/) who was the then faculty advisor of the [Robocon Team](http://students.iitk.ac.in/robocon/). We
decided to work on a project that we had talked about earlier during one of the
Robocon team meetings. The project was to build a robot which could navigate in
an unknown environment, build maps and do some form of path planning (It was not the good ol’ [SLAM](https://en.wikipedia.org/wiki/Simultaneous_localization_and_mapping) problem, trust me :-P). I was excited and overwhelmed at the same time. The task seemed insurmountable and there was so much to learn.
I spent some time reading random stuff from the internet and after another
meeting with my mentor, we decided that for the moment I should study and
implement some path planning algorithms and we would decide how to go ahead
at a later stage.

{% include image.html url="mpl-map.bmp" caption="Illustration 1: This is what I mean by a 'map'.
Nothing fancy, just a bitmap where black denotes
obstacles and white denotes the free region" %}

This time, I studied a few standard
motion planning algorithms and started
thinking of how to simulate them. At
this point, I must admit the MATLAB is
not one of my favourites and I always
try to find a reason for using C++. This
was the perfect opportunity since I
could not find a simple framework to
simulate these algorithms and I admit
that I did not try hard enough (or try at
all! ). I convinced myself that this task
was too computationally intensive to be
handled by python and the only option I had was to use C++. I ended up writing about 200 lines of code to display a minimal (ugly) GUI which allowed the user to
load a map (Illustration 1) and select the starting and ending points for
computing the path and the program would then show an animation of the
planning algorithm finding the path. I showed it to my mentor, he liked it and
encouraged me to simulate another algorithm. This time, I decided, as any good
software engineer would do, that I should divide my program into modules which
share their functionality instead of replicating the code for every simulation I
make. It was this second simulation which changed the direction of my summer
project altogether.

Long story short, I had now completely forgotten about the original problem
statement and was focusing on problems like: How to factor out the pathplanning
algorithms into composable components? What are the basic
components of a path planning problem? What would a sensible API for path
planning look like? I tackled these questions for 5-6 weeks while writing some
prototypes, making flowcharts etc.

While I was brainstorming on the design of this library, I would think of the
behavior of each of the component on an algorithm, does it form a logical entity?
What behaviors of the component to hide and what to expose to the user? Are
the classes in this code a good representation of the objects in real world? I do
not remember what all were the ideas I came up with since it has been almost an
year since I started working on it but what I do remember is how after several
weeks I was finally happy with the design after about 5 complete rewrites of the
entire code (over ~1.5k lines of code). Here is the structure I came up with:

{% include image.html url="mpl-flowchart.png" caption="Illustration 2: Major components. The arrows denote what a typical workflow looks like. The worspace
and problem definition are given to a motion planner which consists of a graph builder, a graph search
and an interpolation method. The planner outputs a path. Each of these components can be visualized." %}

Workspace contains the map of the environment. I defined it as a separate class
so that it is possible to hide the implementation from other modules. Problem
definition contains start and end points at the moment. It can be extended to
incorporate way-points or other path constraints that the user might be interested
in. The graph builder takes a workspace and discards all the information not
required for planning the path thus forming a good representation of the
workspace. The graph search algorithm searches this graph for paths which are
then interpolated using the interpolator to generate smooth paths.

Workspace contains the map of the environment. I defined it as a separate class
so that it is possible to hide the implementation from other modules. Problem
definition contains start and end points at the moment. It can be extended to
incorporate way-points or other path constraints that the user might be interested
in. The graph builder takes a workspace and discards all the information not
required for planning the path thus forming a good representation of the
workspace. The graph search algorithm searches this graph for paths which are
then interpolated using the interpolator to generate smooth paths.

I won’t go more into the library in this post since the library has some
documentation at [lakshayg.github.io/mpel](http://lakshayg.github.io/mpel/). The source code for this library is
available on GitHub at [github.com/lakshayg/mpel](https://github.com/lakshayg/mpel). I would recommend you to
visit the link and have a look at the library and feel free to make changes and
contribute to the code. I close this post with some examples of paths generated
using different path planning algorithms:

{% include image.html url="mpl-path001.png" w="45%" %}
{% include image.html url="mpl-path002.png" w="45%" %}
