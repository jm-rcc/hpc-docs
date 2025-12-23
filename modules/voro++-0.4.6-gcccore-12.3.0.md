[List of Software](../software_shortlist.md)  
# Voro++ 0.4.6  
![Static Badge](https://img.shields.io/badge/class-math-D7D1CC)  
  
  
Voro++ is a software library for carrying out three-dimensional computations of the Voronoi
tessellation. A distinguishing feature of the Voro++ library is that it carries out cell-based calculations,
computing the Voronoi cell for each particle individually. It is particularly well-suited for applications that
rely on cell-based statistics, where features of Voronoi cells (eg. volume, centroid, number of faces) can be used
to analyze a system of particles.  
  
  
## Homepage  
The homepage for Voro++ 0.4.6   
[http://math.lbl.gov/voro++/](http://math.lbl.gov/voro++/)  
### Usage  
To use the module on Bunya, load it with this command:  
  **`module load voro++/0.4.6-gcccore-12.3.0`**  
  
### Toolchain  
GCCcore-12.3.0  
  
### Toolchain Options  
pic: True  
## Available on architecture types  
- epyc3 a100  
- epyc3 h100  
- epyc3 l40  
- epyc3 mi210  
- epyc3  
- epyc4 a16  
- epyc4 l40s  
- epyc4  
- xeonsp4 h100  
- xeonsp4  
  
  
## Dependencies  
Voro++ depends on the following modules, and they will be loaded automatically with this module.  
  
(none)  
  
## Loaded by  
The following modules will load Voro++ as dependency.  
  
[LAMMPS 2Aug2023_update2 -kokkos (foss-2023a)](lammps-2aug2023_update2-foss-2023a-kokkos.md)  
[LAMMPS 2Aug2023_update2 -kokkos-CUDA-12.1.1 (foss-2023a)](lammps-2aug2023_update2-foss-2023a-kokkos-cuda-12.1.1.md)  
  
