[List of Software](../software_shortlist.md)  
----  
  
# libfabric 1.15.1  
![Static Badge](https://img.shields.io/badge/class-lib-D7D1CC)  
  
  

Libfabric is a core component of OFI. It is the library that defines and exports
the user-space API of OFI, and is typically the only software that applications
deal with directly. It works in conjunction with provider libraries, which are
often integrated directly into libfabric.
  
  
  
## Homepage  
The homepage for libfabric 1.15.1   
[https://ofiwg.github.io/libfabric/](https://ofiwg.github.io/libfabric/)  
### Usage  
To use the module on Bunya, load it with this command:  
  **`module load libfabric/.1.15.1-gcccore-11.3.0`**  
  
### Toolchain  
GCCcore-11.3.0  
  
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
- epyc4 mi210  
- epyc4  
- xeonsp4 h100  
- xeonsp4  
  
  
## Dependencies  
libfabric depends on the following modules, and they will be loaded automatically with this module.  
  
[numactl 2.0.14  (GCCcore-11.3.0)](numactl-.2.0.14-gcccore-11.3.0.md)  
  
## Dependended on  
The following modules will load libfabric as dependency.  
  
[OpenMPI 4.1.4  (GCC-11.3.0)](openmpi-4.1.4-gcc-11.3.0.md)  
  
