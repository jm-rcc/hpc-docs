# PLUMED 2.8.1  
![Static Badge](https://img.shields.io/badge/class-chem-D7D1CC)  
  
  
PLUMED is an open source library for free energy calculations in molecular systems which
 works together with some of the most popular molecular dynamics engines. Free energy calculations can be
 performed as a function of many order parameters with a particular  focus on biological problems, using
 state of the art methods such as metadynamics, umbrella sampling and Jarzynski-equation based steered MD.
 The software, written in C++, can be easily interfaced with both fortran and C/C++ codes.
  
  
  
## Homepage  
The homepage for PLUMED 2.8.1 
[https://www.plumed.org](https://www.plumed.org)  
### Usage  
To use the module on Bunya, load it with this command:  
  **`module load plumed/2.8.1-foss-2022a`**  
  
### Toolchain  
foss-2022a  
  
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
- xeonsp4 h100  
- xeonsp4  
  
  
## Dependencies  
PLUMED depends on the following modules, and they will be loaded automatically with this module.  
  
[zlib 1.2.12  (GCCcore-11.3.0)](zlib-.1.2.12-gcccore-11.3.0.md)  
[GSL 2.7  (GCC-11.3.0)](gsl-2.7-gcc-11.3.0.md)  
[Python 3.10.4  (GCCcore-11.3.0)](python-3.10.4-gcccore-11.3.0.md)  
[SciPy-bundle 2022.05  (foss-2022a)](scipy-bundle-2022.05-foss-2022a.md)  
[Boost 1.79.0  (GCC-11.3.0)](boost-1.79.0-gcc-11.3.0.md)  
  
## Dependency of modules  
The following modules will load PLUMED as dependency.  
  
[MEGAHIT 1.2.9  (GCCcore-11.3.0)](megahit-1.2.9-gcccore-11.3.0.md)  
[zstd 1.5.2  (GCCcore-11.3.0)](zstd-1.5.2-gcccore-11.3.0.md)  
[< Software](../software_shortlist.md)  
