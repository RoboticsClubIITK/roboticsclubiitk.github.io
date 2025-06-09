---
layout: post
title: Bombay Diaries
comments: false
author: Manvi Bengani, IITK , EE ,Y22 || Ex-coordinator, Robotics Club
excerpt_separator: <!--more-->
---

It’s the last month of 2024, and I am at the end of fifth semester. This semester was filled with aspirations—securing a summer internship, participating in Inter IIT Aquatics and Inter IIT Tech, and building meaningful relationships with those I worked alongside. While it was a challenging journey, I’m incredibly grateful for the experiences it brought. Winning two medals in Inter IIT Aquatics and a bronze in Inter IIT Tech Meet was fulfilling, not just for the accolades but for the lessons learned and the moments shared with my team. Yet, what I cherish most is the trip to Mumbai, as Mumbai was the place I had grown up and wanted to revisit ever since I shifted.
<!--more-->
---

### Entry #1: Inter IIT Tech Meet 13.0, Here we come!

The Inter IIT Tech Meet is a prestigious Pan-IIT competition that spans a wide range of fields in Science and Technology, from Robotics and AI to Machine Learning, Finance, and Consulting. It’s essentially a large-scale hackathon with four categories of problem statements, each varying in terms of preparation requirements: High Prep, Mid Prep, Low Prep, and No Prep. The categorization depends on the team size and the time allocated for preparation. In these, teams work and submit their solutions before the Meet. In the Meet, teams present their solutions to the sponsor companies and get evaluated.

The No-Prep PS is slightly different. The PS is provided on the spot during the event and a 6-hour window is provided to come up with a working solution. In this category, participating teams are quarantined. Participants must rely solely on their own knowledge and experience.

We were initially working on a Mid-Prep Problem Statement presented by Kalyani Bharat Forge. The task was to design a centralized swarm navigation system capable of:

- Mapping unknown environments.
- Tracking changes in objects within those environments.
- Labeling objects and coordinating robots for various tasks.

Our solution incorporated a Reinforcement Learning (RL)-based exploration algorithm that used the Gmapping package for environment mapping while avoiding dynamic obstacles. We also integrated YOLOv3 to recognize and label objects, storing their locations centrally. A task allocation algorithm was used to assign navigation goals to individual robots. We were working with ROS2 Humble and Gazebo, tools I had some prior experience with but was still in the process of mastering.

However, things took an unexpected turn when the No-Prep Problem Statement : RoboQuest was announced. The event was organized by Rigbetel Labs, a small startup from Pune. Their flagship product was the TortoiseBot—a cost-effective, made-in-India alternative to the widely-used Turtle Bot3. The Turtle Bot3 is a standard in robotics for testing navigation and automation software, and the TortoiseBot aimed to replicate this functionality while still being in development. This new problem also involved working with ROS2 and Gazebo, so my teammate Aayush (co-coordinator at the Robotics Club) and I were selected to work on it.

While the exact problem statement wouldn’t be revealed until the event itself, the key requirement was to brush up on our ROS2 skills. Having worked with Aayush for the past 9 months in the Robotics Club I couldn’t have asked for a better teammate for this challenge.

---

### Entry #2: RoboQuest

Even though we had prepared as much as we could, uncertainty loomed over the event. Given our lack of prior experience, there were little expectations from us. We were under strict instructions not to interact with anyone or reveal our team ID.

**Round 1: The Simulation Challenge**

The first round was a simulation-based challenge in Gazebo. Out of all the teams, only 10 would proceed to Round 2. For this round, we were provided with a Gazebo simulation of the Tortoise Bot. The problem statement required us to: Spawn four copies of the robot model in the given environment. Run a mapping algorithm on all four bots to autonomously create a joint map.

It seemed impossible to achieve in this short time. Breaking it down into manageable goals, we began working on each part. Progress was slow and frustrating. At times, nothing seemed to work—until suddenly, it did. Aayush managed to get SLAM running autonomously, and I successfully spawned multiple robots in the same environment. However, we ran out of time to write code for map stitching. Drawing from prior experience, we decided it was better to submit whatever was functional rather than risk an incomplete submission. Nervously, we hoped we’d make it to the next round.

**Round 2: The Hardware Challenge**

The next morning, to our relief, we found out we had qualified for Round 2, securing a spot among the top seven teams. The second round focused on implementing a localization algorithm using the Tortoise Bot. We were quarantined in a workspace for five hours and each team was provided a bot to code on. The task was to build a map of the given environment and then localize the robot within it. Despite our efforts, nothing seemed to work. Time was slipping away, and the algorithms we found online were far too complex to implement within the tight time frame. Other teams appeared to have made some progress, but their strategies were unclear to us. As our demonstration time approached, I decided to take a risk. Instead of chasing complicated solutions, I wrote a simple feature-matching-based algorithm. After some debugging and a fair amount of frustration, it finally worked.... During the demonstration, we discovered that only three teams—including ours—had managed to produce a working solution. Most teams had successfully created a map but failed to implement localization. It turned out that many had attempted sophisticated algorithms and couldn’t make them work within the constraints.

The judges were engaging and insightful. They were happy to discuss solutions and even offered tips based on their own expertise. To our surprise, some of them were part of the organizing team for ROSCon India, an event I had long anticipated. They connected with us on LinkedIn, opening up new networking opportunities.

After eight intense hours in quarantine, we were finally free. Exhausted but elated, I indulged in a midnight dinner, eagerly recounting the event’s highlights to my friends.

There was a lot of learning to draw from these 2 days. Witnessing how quick thinking and efficient teamwork propelled our efforts, despite our lack of expertise in SLAM and robotics, was both inspiring and rewarding. Successfully competing on equal footing instilled in me the confidence and motivation to further pursue my work in robotics.

---

### Entry#3: Mumbai and the Robotics Club

The Robotics Club had members working on different Problem Statements. Aayush and Yuval served as co-coordinators, while Garima, Varun, and Aniket—former Secretaries—were tackling the Bharat Forge Problem Statement. Beyond our shared passion for robotics, we had built a close-knit bond through projects, concerts, and parties throughout the year.

For days, we had been buzzing with excitement about exploring Mumbai. This trip held a special significance for me, as it was a chance to revisit my old home, school, and neighborhood. Still, we reminded ourselves that our primary focus was the Problem Statements we had prepared. Balancing work and fun was important—and we mostly managed to stick to it.

Once Yuval, Aayush, and my Problem Statements concluded, we had a free day. Yuval was eager to visit a beach, while I wanted to see my old home and pool. Being the “local guide” of the group, I took charge of the group, but my rusty navigation skills led to some confusion. Having not been to Mumbai in years, I wasn’t entirely sure of the routes, and Yuval’s endless questions didn’t help.

Our first stop was my old home and pool. Yuval, still puzzled about the lack of a beach, reluctantly followed as we hopped from an auto to a local train to a kaali-peeli cab. When we finally reached the beach, it turned out to be as I had warned—overcrowded and unkempt.

To make up for it, I took the group to Marine Drive, the iconic promenade immortalized in countless movies. Under the night sky, with the city skyline sparkling and a cool breeze enveloping us, our complaints faded. The chaos of Mumbai dissolved into a rare and precious tranquility. We sat quietly on the walkway, soaking in the surreal peace that contrasted sharply with the city’s frenetic energy.

Later that night, we joined the Bharat Forge team for dinner. The table buzzed with stories of presentations, other IITs, and speculation about the medal results to be announced the next day.

The results, expected by noon, were delayed. We had explored the IITB campus all morning, so we decided to visit Hiranandani and the Jio World Drive at BKC. Being tech enthusiasts, we were especially thrilled about the Apple Store there. Our last day in Mumbai, concluded with the Inter IIT networking dinner and Award ceremony. We formed new relations with several other robotics teams across IITs. We had enjoyed our time on campus and had countless moments to look back on.
