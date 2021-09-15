---
layout: page
title: Mandelbrot Explorer
description: GPU Accelerated Mandelbrot Explorer
img: /assets/img/mandelbrot_zoom.gif
importance: 1
category: graphics
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/mandelbrot_explore.gif' | relative_url }}" alt="" 
title="exploring mandelbrot set"/>
    </div>
</div>
<div class="caption">
    Real-time exploration of the Mandelbrot Set
</div>

[GitHub link](https://github.com/jackm97/mandelbrot_explorer_CUDA)

The application is CUDA accelerated, so it allows for fast and smooth exploration of the Mandelbrot Set. The code is 
also implemented using an arbitrary precision library so the depth of the zoom extends beyond what is possible with 
single precision floating point numbers while using the same FP32 cores. This means deeper zooms are possible at 
reasonable computation speed for non-compute GPUs that have drastically less FP64 cores than their compute 
counterparts. The precision at the moment is limited to a zoom of ~1E32. I noticed that anything after this the 
library produced inconsistent results, so I capped the precision to quad-precision.