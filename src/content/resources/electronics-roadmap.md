---
title: 'Electronics Roadmap'
date: '2026-03-04'
description: 'A guide to getting started with electronics and microcontrollers'
tags: ['Electronics', 'Arduino', 'Microcontrollers']
---

## Week 1: Microcontrollers 101

**Objective:** This week, we’ll dig deep into the heart of a robot—the microcontroller! You’ll learn to charm Arduinos, ESPs, and STMs, and even compare their personalities (without hurting their feelings). Plus, get your hands on some virtual circuit-building with Tinkercad.

### Resources

**Arduino (The Starter Pack for Robot Brains):**
- [Arduino Video Playlist (Binge-watch like it’s Netflix)](https://www.youtube.com/playlist?list=PLPK2l9Knytg5s2dk8V09thBmNl2g5pRSr)
- [Arduino Official Site (Home of the Blinky LEDs)](https://www.arduino.cc/)
- **Suggested Learning:** Get familiar with digital pins, analog inputs, and the general attitude of making LEDs blink and servos spin.
- [Interesting Arduino Projects Playlist](https://www.youtube.com/playlist?list=PLGs0VKk2DiYw-L-RibttcvK-WBZm8WLEP)

**ESP32 (The “Smart” One):**
- [Getting Started with ESP32](https://randomnerdtutorials.com/getting-started-with-esp32/)
- [ESP32io (ESP’s Personal Diary)](https://esp32io.com/)
- **Focus:** Explore the Wi-Fi, Bluetooth, and low-power modes of ESP32. Who knew this little guy could multitask better than us?

**STM32 (The Serious Professional):**
- [STM32 Guide (For When You Want to Build “Grown-Up” Robots)](https://erc-bpgc.github.io/handbook/electronics/Development_Boards/STM32/)
- **Recommended Study:** Cover basic configuration, GPIO, and interrupt handling. Unlike Arduino’s laid-back style, STM demands attention to detail.

**Raspberry Pi:**
- [Raspberry Pi for Starters](https://youtube.com/playlist?list=PLPK2l9Knytg67nkvpnnl81ossAHfOgmqU)
- [The Raspberry Pi Guy Channel](https://www.youtube.com/@TheRaspberryPiGuy/featured)

**Compare Arduino UNO vs. STM32F103C8T6:**
- Draw a comparison table covering processing power, GPIO availability, memory, and use cases. Think of it like speed-dating for microcontrollers.

**Tinkercad Circuits — The Virtual Playground:**
- [Intro to Tinkercad Circuits](https://www.tinkercad.com/learn/circuits?collectionId=O0K87SQL1W5N4P2)
- **Get Started:** Simulate circuits, tinker with LED blinkers, and get hands-on without blowing up real resistors. (Trust us, the LEDs will thank you.)

### Assignments

1. **Arduino on Tinkercad:**
    - Build a *“Blink”* project where an LED blinks every second.
    - **Challenge:** Create a traffic light system using three LEDs (Red, Yellow, Green) with timing intervals like a real intersection.

2. **KnockLock on Tinkercad:**
    - Follow [this guide](https://www.tinkercad.com/learn/overview/OP6T6C6ISCC2VBC) to build a KnockLock circuit.
    - **What is it?** A lock that only opens when you *knock* in the right pattern. (Even better than a secret handshake.)

3. **STM32 and ESP32:**
    - Implement a simple blink project on both STM32 and ESP32.
    - **Bonus:** Use ESP32’s Wi-Fi capability to send the status of the LED to your smartphone. Now you’ve got a blinking light *and* a notification. High-tech, right?

4. **Report Writing:**
    - Prepare a short comparison between Arduino UNO and STM32F103C8T6. Points to include: clock speed, GPIO pins, communication protocols, and suitability for different projects.
    - **Tip:** Be diplomatic. We don’t want to hurt Arduino’s feelings!

---

## Week 2: Sensors and Circuits

**Objective:** This week, give your robot the ability to *see*, *sense*, and *respond*. Dive into the world of sensors, figure out which wires to use (and not use), and calculate battery power—so your bot doesn’t run out of juice mid-robot battle.

### Resources

1. **Sensor Scouting:**
    - [Guide to Popular Arduino Sensors](https://www.learnrobotics.org/blog/popular-arduino-sensors/)
    - **Suggested Topics:** Ultrasonic, Infrared (IR), Temperature, Proximity, and more. Learn how to make your bot see in the dark (IR), avoid obstacles (Ultrasonic), and possibly even know when to cool off (Temperature).
    - **Pro Tip:** Think about where each sensor could be used—ultrasonics for navigation, IRs for line following, and temperature sensors to keep your circuits from overheating.

2. **IMU (Inertial Measurement Unit):**
    - [IMU Sensor Working and Applications](https://www.elprocus.com/imu-sensor-working-applications/)
    - [IMU Explained — Video Guide](https://www.youtube.com/watch?v=SVI_NldMjlE)
    - [I2C Explained Tutorial](https://www.youtube.com/playlist?list=PLDkCXvVkbeo_GzS5fpEYFAY1wdNbe-zA7)
    - **Focus:** Understand accelerometers, gyros, and magnetometers. IMUs tell your robot which way is up, down, and when it’s spinning around (so it doesn’t get dizzy).

3. **Choosing Wires:**
    - [Basic Wiring Guide for Bots](https://wiki.sdrobots.com/index.php/Basic_Wiring_Guide)
    - **Key Takeaway:** Learn which wires to use based on current ratings. Pay special attention to the AWG (American Wire Gauge) table, because using the wrong wire is like asking your bot to run a marathon in flip-flops.

4. **Battery Calculations — Keep the Lights On:**
    - [How to Calculate Battery Runtime](https://www.dnkpower.com/how-to-calculate-battery-run-time/)
    - **Formula Fun:** Figure out how long your battery will last before your bot takes a nap. Master this, and you’ll be the hero that prevents mid-competition shutdowns.

5. **Which Battery To Use?**
    - [Husarion Blog: Choosing the Right Power Source](https://medium.com/husarion-blog/batteries-choose-the-right-power-source-for-your-robot-5417a3ec19ca)

### Assignments

1. **Sensor Research Project:**
    - Pick two sensors (e.g., Ultrasonic and IR) and write a short summary of how they work and where you would use them in a robot.
    - **Bonus:** Find one unconventional use for each. (Ever thought of using a temperature sensor as a hand gesture detector?)

2. **IMU Challenge:**
    - Write a code snippet to read basic IMU data (if you have an actual IMU sensor, use it, otherwise, explore some simulation tools or libraries).
    - **Bonus:** Visualise the IMU data in a graph. Let’s see some wavy lines!

3. **Battery Runtime Calculation:**
    - Calculate the required battery capacity for a small bot that has:
        - One 12V DC motor (drawing 1.5 A)
        - One servo (drawing 0.5 A)
        - A few LEDs and sensors (combined draw of 0.2 A)
    - **Hint:** Use the formula from the resource. Show your working steps—because maths deserves its own spotlight!

---

## Week 3: Motors and Motor Drivers

**Objective:** This week, explore the fundamentals of motors and motor drivers. Understand how different types of motors function, learn to select the right motor driver for your project, and master the wiring connections—so your bot doesn’t end up spinning in circles. Calculate power requirements to ensure smooth and efficient operation.

### Resources

1. **Motors — (So Your Bot Doesn’t Just Sit There):**
    - [Types of Motors Used in Robotics](https://robocraze.com/blogs/post/types-of-motors-used-in-robotics?srsltid=AfmBOor7ZhmZgBLCm5_IljRFKZg79_GM7rcRgokr9vhlJ-m4vwZToj1T)
    - **Study:** Learn about DC motors, stepper motors, and servos. Each has a unique personality—pick the right one, and your bot will move like a dream.

2. **Choosing the Right Motor:**
    - [Motor Selection Guide](https://drive.google.com/file/d/105CuPGm6KznU1-lU8gB7wIvGDmhAnyhJ/view)
    - **Key Points:** Dive into torque, RPM, and power calculations. Find the one that fits your bot’s needs perfectly.

3. **Motor Drivers:**
    - [Types of Motor Drivers](https://robocraze.com/blogs/post/what-is-motor-driver?srsltid=AfmBOoranLLHNdeAB42ieIax_Q2SsluJm4dUs8LLQ7JDbBk97FB6yr3j)
    - **Focus:** Explore the L298N, H-Bridge, and other drivers to ensure smooth control. Without a good driver, your motor is just a fancy paperweight.

4. **Motor Control Using L298N:**
    - [Controlling Two DC Motors Using L298N and Arduino](https://www.youtube.com/watch?v=dyjo_ggEtVU)
    - **Hands-On:** Follow along to control two DC motors using the L298N driver and Arduino.

### Assignments

1. **Motors Analysis:**
    - Create a comparison table for at least 3 different types of motors (e.g., DC, stepper, servo) covering torque, speed, control complexity, and applications.

---

## Week 4: Control Systems

**Objective:** Control systems help to control the movements and functions of the robot. We need the controllers because the dynamics vary with the time. You will learn about PID and Kalman filters to keep your robot stable.

1. **PID Controller Fundamentals:**
    - [PID Controller Theory Playlist](https://youtube.com/playlist?list=PLn8PRpmsu08pQBgjxYFXSsODEF3Jqmm-y)
    - [PID Controller Explained Visually](https://youtu.be/fv6dLTEvl74)

2. **Control Systems in Practice:**
    - [Practical Control Theory Playlist](https://youtube.com/playlist?list=PLn8PRpmsu08pFBqgd_6Bi7msgkWFKL33b)
    - This playlist teaches more basic concepts of Control Theory and how to practically apply them to robots.

3. **Kalman Filter:**
    - [Visually Explained: Kalman Filters](https://youtu.be/IFeCIbljreY)
