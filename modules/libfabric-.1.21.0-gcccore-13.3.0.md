# libfabric 1.21.0  
![Static Badge](https://img.shields.io/badge/class-lib-D7D1CC)  
  
  

Libfabric is a core component of OFI. It is the library that defines and exports
the user-space API of OFI, and is typically the only software that applications
deal with directly. It works in conjunction with provider libraries, which are
often integrated directly into libfabric.
  
  
  
## Homepage  
The homepage for libfabric 1.21.0 
[https://ofiwg.github.io/libfabric/](https://ofiwg.github.io/libfabric/)  
### Usage  
To use the module on Bunya, load it with this command:  
  **`module load libfabric/.1.21.0-gcccore-13.3.0`**  
  
### Toolchain  
GCCcore-13.3.0  
  
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
  
[numactl 2.0.18  (GCCcore-13.3.0)](numactl-.2.0.18-gcccore-13.3.0.md)  
  
## Dependency of modules  
The following modules will load libfabric as dependency.  
  
[MEGAHIT 1.2.9  (GCCcore-11.3.0)](megahit-1.2.9-gcccore-11.3.0.md)  
[zstd 1.5.2  (GCCcore-11.3.0)](zstd-1.5.2-gcccore-11.3.0.md)  
[< Software](../software_shortlist.md)  
