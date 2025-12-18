---
title: Complete Introduction To Six Keplerian Elements For Beginners
pubDate: 2025-01-11
tags: ["Physics", "Orbital Mechanics"]
featuredImage: "/assets/article/featuredImages/2025/complete-introduction-to-six-keplerian-elements-for-beginners.png"
description: In school, we often assume that the orbits of satellites and planets are perfectly circular. However, in real-world applications, orbital mechanics are far more intricate.
---

Everything that moves around a celestial body has its own orbit. One of the most common examples is the Moon, which orbits the Earth. Similarly, satellites also move around the Earth in their respective orbits.

In school, we often assume that the orbits of satellites and planets are perfectly circular, with their centers located exactly at the center of the body they are orbiting (the central body). This simplification is used to reduce the complexity of calculations. However, in real-world applications, orbital mechanics are far more intricate, requiring consideration of multiple properties to accurately describe and calculate orbits.

The **Keplerian Elements** provides detailed information about an orbit's characteristics, including its size, shape, orientation, and position. Additionally, these elements can be processed further to derive a wealth of other valuable information about the orbit.

### Six Keplerian Elements:
1. Semi-major axis (**_a_**)
2. Eccentricity (**_e_**)
3. Inclination (**_i_**)
4. Right Ascension of the Ascending Node (RAAN) (**_Ω_**)
5. Argument of Periapsis (**_ω_**)
6. True anomaly (**_v_**)

> **Note**: The examples in this article focus on Earth as the central body. However, the same elements apply to other cases, such as the Moon orbiting the Earth, satellites orbiting the Moon, the Earth orbiting the Sun, etc...

## 1. Semi-major axis, *a*

The **semi-major axis** (denoted as **_a_**) determines the size of an orbit. A larger value of **_a_** corresponds to a bigger orbit, while a smaller value of **_a_** corresponds to a smaller orbit. For a perfectly circular orbit, **_a_** is equal to the radius of the orbit. However, most orbits are not perfect circles; they are elliptical (oval-shaped).

![](/assets/article/2025/1/1.webp)
<p class="img-desc">(Figure 1.0)</p>

From the figure, you can see that an elliptical orbit has two axes: the **minor axis** (the shortest part of the ellipse) and the **major axis** (the longest part of the ellipse). The semi-major axis is half of the major axis.

The unit used for the semi-major axis is typically meters (m) or kilometers (km) for satellite orbits. For planetary orbits, such as Earth's orbit around the Sun or Mars' orbit around the Sun, scientists often use **Astronomical Units (AU)**, where 1 AU ≈ 1.496×10<sup>11</sup> m

## 2. Eccentricity, *e*

**Eccentricity** (denoted as **_e_**) determines the shape of orbits. Eccentricity is dimensionless, meaning it has no unit. I personally understand eccentricity as a measure of *"how squished the orbit is."* The greater the value of **_e_**, the more elongated (or elliptical) the orbit becomes. While this isn't the precise definition, it’s a helpful way to conceptualize it when first encountering the term.

The value of **_e_** ranges from 0 to 1. For a perfectly circular orbit, **_e_** is exactly 0. When **_e_** is between 0 and 1, the orbit is elliptical. When **_e_** reaches 1 or greater, the trajectory transitions to a parabolic or hyperbolic path.

Here’s a great GIF visualizing how eccentricity affects the shape of an orbit.

![](/assets/article/2025/1/2.gif)
<p class="img-desc">(Figure 2.0, Simulation: GeoGebra)</p>

## 3. Inclination, *i*

The **Inclination** (denoted as **_i_**) of an orbit refers to the angle between the orbital plane and the reference plane, typically known as the **Equatorial Plane** for Earth-centric orbits. Understanding inclination can be challenging without visual aids, so let’s refer to the diagram below:

![](/assets/article/2025/1/3.webp)
<p class="img-desc">(Figure 3.0)</p>


> **Note**: This diagram serves as the ultimate reference for all the elements discussed in this article. While I will provide my own simplified diagram to clarify certain points, you can always refer back to this diagram if anything becomes unclear. ([Source: Kumari, Amisha & Deohans, Aayushi. (2019). Orbital Lifetime Analysis of GTO Objects](https://www.researchgate.net/publication/336460466_Orbital_Lifetime_Analysis_of_GTO_Objects))

In this 3D depiction, the satellite’s orbit around the Earth is shown. The **Equatorial Plane** is the flat plane passing through the Earth's equator, often used as the **Reference Plane**. The tilted plane in which the satellite moves is called the **Orbital Plane**.

To grasp the concept of inclination intuitively:

1. Start by imagining the Orbital Plane perfectly aligned with the Reference Plane.
2. Now, visualize tilting the Orbital Plane by pushing one side of its major axis upward and the other downward. This tilt creates the inclination.

The **ascending node** is the point where the object moves from the lower part of its orbit to the upper part, crossing the Reference Plane. **The inclination is the angle measured at the ascending node between the Reference Plane and the Orbital Plane**.

## 4. Right Ascension of the Ascending Node (RAAN), _Ω_

The Right Ascension of the Ascending Node (RAAN) or also known as the Longitude of the Ascending Node (denoted as **_Ω_**) determines the orientation of the orbit's ascending node relative to a reference direction.

![](/assets/article/2025/1/3.webp)
<p class="img-desc">(Figure 4.0)</p>

For satellites that orbit the Earth, the reference direction would be the **Vernal Equinox** which acted as a fixed reference direction. The vernal equinox direction is essentially the line from the **center of the Earth** to the **center of the Sun** at the exact moment the Sun appears to cross the Earth's equator from south to north.

**RAAN** specifies the angle between a fixed reference direction (**vernal equinox direction**) and the **ascending node**, which is the intersection of the orbital plane with the **Reference Plane** (Equatorial Plane). 

The intersection of these two planes forms a line known as the **Line of Nodes**. As the orbit traces the edges of the orbital plane, there are two points where it crosses the reference plane:

1. The **descending node**: Where the object moves from above the reference plane to below it.
2. The **ascending node**: Where the object moves from below the reference plane to above it.

![](/assets/article/2025/1/4.webp)
<p class="img-desc">(Figure 4.1)</p>

## 5. Argument of Periapsis, _ω_

**Argument of Periapsis** (denoted as **_ω_**) or sometimes referred to as the **Argument of Perigee** (when Earth is the central body) is an important concept in orbital mechanics. Before understanding what the Argument of Periapsis actually is, it’s essential to first grasp the concepts of the focus point, periapsis, and apoapsis.

### Focus points, Periapsis and Apoapsis

Figure 1.0 shows the typical shape of satellite orbits. Notice that Earth is not located at the center of the orbit (the intersection point of the two axes). While we often assume Earth is at the center, in reality, it is positioned at one of the **Focus points** of the orbit.

The position of Earth along the major axis determines the location of **Focus Point 1 (F1)**. For example, if Earth is located toward the left side of the major axis, then F1 will also be on the left side, while **Focus Point 2 (F2)** will be on the right side. F2 is essentially an "invisible" focus point and serves to balance the symmetry of the ellipse.

The points at each end of the major axis are known as the **periapsis** and **apoapsis**:

- **Periapsis**: The closest point from the central body.
- **Apoapsis**: The farthest point from the central body.

![](/assets/article/2025/1/5.webp)
<p class="img-desc">(Figure 5.0)</p>

While **periapsis** and **apoapsis** are general terms, specific names are used depending on the celestial body being orbited:
- **Perigee** and **Apogee**: For objects orbiting Earth.
- **Perihelion** and **Aphelion**: For objects/body orbiting the Sun.

To maintain clarity, I will use the general terms **periapsis** and **apoapsis** throughout this article.

**The argument of periapsis is the angle measured within the orbital plane, from the ascending node to the periapsis of the orbit, in the direction of motion**. It essentially describes how the orbit is oriented within its plane.

![](/assets/article/2025/1/6.webp)
<p class="img-desc">(Figure 5.1)</p>

The value of **_ω_** directly determines the placement of the periapsis relative to the ascending node:
- If **_ω_** = 0°, the **periapsis** coincides with the **ascending node**
- If **_ω_** = 90°, the **periapsis** lies at a quarter orbit from the **ascending node**

## 6. True Anomaly, _v_

**True anomaly** (often denoted as **_ν_**) specifies the current position of the orbiting body relative to the **periapsis**. The value of **_ν_** is the angle measured between two points:

1. The **periapsis**.
2. The current position of the orbiting object.

![](/assets/article/2025/1/3.webp)
<p class="img-desc">(Figure 6.0)</p>

The value of **_v_** can range from 0° to 360°
- At **0°**: The object is at the **periapsis**.
- At **180°**: The object is at the **apoapsis**.
- At **90° or 270°**: The object is halfway between **periapsis** and **apoapsis**.

## Summary
That’s it! We’ve covered the essential concepts you need to understand the **Six Keplerian Elements**. Keep in mind, this is just scratching the surface. There’s so much more to explore, like additional orbital elements and the fascinating math that brings it all together.

But for now, this serves as a solid starting point for anyone curious about diving into **Orbital Mechanics**.

Thanks for reading, and until next time, Happy Orbiting!

## References and Credits
- [1]  https://orbital-mechanics.space/classical-orbital-elements/classical-orbital-elements.html
- [2]  https://youtu.be/AReKBoiph6g?si=cU4y1x6RnOaHi65S
- [3]  https://youtu.be/2gAYqtmNJx8?si=127B_P1M2orAFBiC
- [4]  [Kumari, Amisha & Deohans, Aayushi. (2019). Orbital Lifetime Analysis of GTO Objects](https://www.researchgate.net/publication/336460466_Orbital_Lifetime_Analysis_of_GTO_Objects)
