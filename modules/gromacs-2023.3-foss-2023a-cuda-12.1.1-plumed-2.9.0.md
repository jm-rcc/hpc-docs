# GROMACS 2023.3  
(bio)  
  
  
GROMACS is a versatile package to perform molecular dynamics, i.e. simulate the
Newtonian equations of motion for systems with hundreds to millions of
particles.  
  
This is a GPU enabled build, containing both MPI and threadMPI builds
for both single and double precision.  
  
It also contains the gmxapi extension for the single precision MPI build
next to PLUMED.  
  
  
### Toolchain  
{'name': 'foss', 'version': '2023a'}  
  
### Toolchain Options  
{'openmp': True, 'usempi': True, 'extra_cxxflags': '-fpermissive'}  
  
  
### Usage  
Use the command **`module load gromacs/2023.3-foss-2023a-cuda-12.1.1-plumed-2.9.0`** to load the module on Bunya.  
  
## Available on architecture types  
- epyc3 a100  
- epyc3 h100  
- epyc3 l40  
- epyc4 a16  
- epyc4 l40s  
- xeonsp4 h100  
  
  
## Dependencies  
[('CMake', '3.26.3'), ('scikit-build', '0.17.6'), ('Doxygen', '1.9.7')]  
  
