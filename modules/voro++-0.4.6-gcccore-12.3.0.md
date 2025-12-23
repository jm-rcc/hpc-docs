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
  
## Dependency of modules  
The following modules will load Voro++ as dependency.  
  
[MEGAHIT 1.2.9  (GCCcore-11.3.0)](megahit-1.2.9-gcccore-11.3.0.md)  
[zstd 1.5.2  (GCCcore-11.3.0)](zstd-1.5.2-gcccore-11.3.0.md)  
[< Software](../software_shortlist.md)  
