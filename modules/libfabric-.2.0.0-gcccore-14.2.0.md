[List of Software](../software_shortlist.md)  
# libfabric 2.0.0  
![Static Badge](https://img.shields.io/badge/class-lib-D7D1CC)  
  
  

Libfabric is a core component of OFI. It is the library that defines and exports
the user-space API of OFI, and is typically the only software that applications
deal with directly. It works in conjunction with provider libraries, which are
often integrated directly into libfabric.
  
  
  
## Homepage  
The homepage for libfabric 2.0.0   
[https://ofiwg.github.io/libfabric/](https://ofiwg.github.io/libfabric/)  
### Usage  
To use this module on Bunya, load it with this command:  
  **`module load libfabric/.2.0.0-gcccore-14.2.0`**  
  
### Toolchain  
GCCcore-14.2.0  
  
### Toolchain Options  
pic: True  
## Available on architecture types  
- epyc3 a100  
- epyc3 l40  
- epyc4 a16  
- xeonsp4 h100  
  
  
## Dependencies  
libfabric depends on the following modules, and they will be loaded automatically with this module.  
  
[numactl 2.0.19  (GCCcore-14.2.0)](numactl-.2.0.19-gcccore-14.2.0.md)  
  
## Loaded by  
The following modules will load libfabric as dependency.  
  
[OpenMPI 5.0.7  (GCC-14.2.0)](openmpi-5.0.7-gcc-14.2.0.md)  
  
