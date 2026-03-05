---
title: "What is a Robot in IITK"
author: "Deepak Gangwar,Member IGVC. "
date: "12-01-2018"
image: "/Blog/What is a Robot in IITK.png"
description: "Migrating a legacy codebase is never easy, but the benefits of real-time communication were too good to ignore."
---

# The Bottleneck

Our previous stack running on **ROS 1 Noetic** was serving us well, until we started adding high-bandwidth sensors. The centralized *roscore* became a single point of failure, and the TCP overhead was introducing latency in our control loops.

## Enter ROS 2 Humble

We decided to bite the bullet and migrate to **ROS 2 Humble**. The key advantages we were looking for:

- **DDS (Data Distribution Service)**: No more master node!
- **Lifecycle Management**: Better state control of our nodes.
- **Python 3 Modernization**: leveraging the latest libraries.

## The Migration Process

It wasn't smooth sailing. We had to rewrite our custom messages and adapt our heavy SLAM algorithms.

```python
# Old ROS 1 Publisher
pub = rospy.Publisher('chatter', String, queue_size=10)

# New ROS 2 Publisher
self.publisher_ = self.create_publisher(String, 'chatter', 10)
```

## Results

After 2 months of grueling refactoring, our latency dropped by **40%**. The rover felt snappier, and the peace of mind of having a decentralized network was worth every sleepless night.
