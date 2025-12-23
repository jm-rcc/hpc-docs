# GROMACS 2023.3 -CUDA-12.1.1-PLUMED-2.9.0 
![Static Badge](https://img.shields.io/badge/class-bio-D7D1CC)  
  
  

GROMACS is a versatile package to perform molecular dynamics, i.e. simulate the
Newtonian equations of motion for systems with hundreds to millions of
particles.

This is a GPU enabled build, containing both MPI and threadMPI builds
for both single and double precision.

It also contains the gmxapi extension for the single precision MPI build
next to PLUMED.  
  
  
### Usage  
To use the module on Bunya, load it with the command  
  **`module load gromacs/2023.3-foss-2023a-cuda-12.1.1-plumed-2.9.0`**.  
  
### Toolchain  
foss (2023a)  
  
### Toolchain Options  
{'openmp': True, 'usempi': True, 'extra_cxxflags': '-fpermissive'}  
  
  
## Available on architecture types  
- epyc3 a100  
- epyc3 h100  
- epyc3 l40  
- epyc4 a16  
- epyc4 l40s  
- xeonsp4 h100  
  
  
## Dependencies  
[CUDA 12.1.1  (system system)](link)  
[UCX-CUDA 1.14.1 -CUDA-12.1.1 (GCCcore 12.3.0)](link)  
[Python 3.11.3  (GCCcore 12.3.0)](link)  
[SciPy-bundle 2023.07  (gfbf 2023a)](link)  
[networkx 3.1  (gfbf 2023a)](link)  
[mpi4py 3.1.4  (gompi 2023a)](link)  
[PLUMED 2.9.0  (foss 2023a)](link)  
  
## Homepage  
The homepage for GROMACS 2023.3 -CUDA-12.1.1-PLUMED-2.9.0.  
[https://www.gromacs.org](https://www.gromacs.org)  
