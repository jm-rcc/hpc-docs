[List of Software](../software_shortlist.md)  
----  
  
# PLUMED 2.7.2  
![Static Badge](https://img.shields.io/badge/class-chem-D7D1CC)  
  
  
PLUMED is an open source library for free energy calculations in molecular systems which
 works together with some of the most popular molecular dynamics engines. Free energy calculations can be
 performed as a function of many order parameters with a particular  focus on biological problems, using
 state of the art methods such as metadynamics, umbrella sampling and Jarzynski-equation based steered MD.
 The software, written in C++, can be easily interfaced with both fortran and C/C++ codes.
  
  
  
## Homepage  
The homepage for PLUMED 2.7.2   
[https://www.plumed.org](https://www.plumed.org)  
### Usage  
To use the module on Bunya, load it with this command:  
  **`module load plumed/2.7.2-foss-2021a`**  
  
### Toolchain  
foss-2021a  
  
### Toolchain Options  
usempi: True  
## Available on architecture types  
- epyc3 a100  
- epyc3 h100  
- epyc3 l40  
- epyc3 mi210  
- epyc3  
- epyc4 a16  
- epyc4 l40s  
- epyc4 mi210  
- epyc4  
  
  
## Dependencies  
PLUMED depends on the following modules, and they will be loaded automatically with this module.  
  
[zlib 1.2.11  (GCCcore-10.3.0)](zlib-.1.2.11-gcccore-10.3.0.md)  
[GSL 2.7  (GCC-10.3.0)](gsl-2.7-gcc-10.3.0.md)  
[Python 3.9.5  (GCCcore-10.3.0)](python-3.9.5-gcccore-10.3.0.md)  
[SciPy-bundle 2021.05  (foss-2021a)](scipy-bundle-2021.05-foss-2021a.md)  
[Boost 1.76.0  (GCC-10.3.0)](boost-1.76.0-gcc-10.3.0.md)  
  
## Dependended on  
The following modules will load PLUMED as dependency.  
  
[CP2K 8.2  (foss-2021a)](cp2k-8.2-foss-2021a.md)  
[LAMMPS 23Jun2022 -kokkos (foss-2021a)](lammps-23jun2022-foss-2021a-kokkos.md)  
  
