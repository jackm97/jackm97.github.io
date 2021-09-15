---
layout: page 
title: simViewer 
description: GUI application for exploring fluid simulations 
img: /assets/img/water3d.gif
importance: 1 
category: graphics
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/water3d.gif' | relative_url }}" alt="" 
title="3D fluid render"/>
    </div>
</div>
<div class="caption">
    3D simulation data generated using simViewer and rendered using Blender
</div>

[GitHub link](https://github.com/jackm97/simViewer)

The application is a GUI application that allows users to experiment on the fly with different fluid simulation
parameters. Two methods are currently implemented, Jos Stam's "Stable Fluids" [[1]](#References) and a generic Lattice
Boltzmann Method inspired by "Fast and Scalable Turbulent Flow with Two-Way Coupling" [[2]](#References). It supports 2D
simulation and visualization of fluid flow and 3D simulation without visualization of fluid flow for the NS solver. It
supports 2D simulation and visualization of fluid flow and density for the Lattice Boltzmann solver. The Lattice
Boltzmann Method is implemented in CUDA so a CUDA capable GPU is required to run the software.

Simulation data can be cached in .PNG format for 2D data and .vdb for 3D data. The .vdb data can be imported into an
application like Blender for rendering.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/smoke2d.gif' | relative_url }}" alt="" 
title="2D fluid render"/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/sound2d.gif' | relative_url }}" alt="" 
title="2D sound propagation"/>
    </div>
</div>
<div class="caption">
    On the left, a 2D smoke simulation generated using Jos Stam's "Stable Fluids". Right, a sound wave is generated from
a .wav file and its propagation and interaction with a stationary triangle is simulated using the Lattice Boltzmann Method.
</div>

## References

[1] Stam, J. (1999, July). Stable fluids. In Proceedings of the 26th annual conference on Computer graphics and
interactive techniques (pp. 121-128).

[2] Li, W., Chen, Y., Desbrun, M., Zheng, C., & Liu, X. (2020). Fast and scalable turbulent flow simulation with two-way
coupling. ACM Transactions on Graphics, 39(4), Art-No.
