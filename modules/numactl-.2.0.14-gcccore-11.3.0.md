# numactl 2.0.14  
![Static Badge](https://img.shields.io/badge/class-tools-D7D1CC)  
  
  

 The numactl program allows you to run your application program on specific
 cpu's and memory nodes. It does this by supplying a NUMA memory policy to
 the operating system before running your program. The libnuma library provides
 convenient ways for you to add NUMA memory policies into your own program.
  
  
  
## Homepage  
The homepage for numactl 2.0.14 
[https://github.com/numactl/numactl](https://github.com/numactl/numactl)  
### Usage  
To use the module on Bunya, load it with this command:  
  **`module load numactl/.2.0.14-gcccore-11.3.0`**  
  
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
numactl depends on the following modules, and they will be loaded automatically with this module.  
  
(none)  
  
## Dependency of modules  
The following modules will load numactl as dependency.  
  
[MEGAHIT 1.2.9  (GCCcore-11.3.0)](megahit-1.2.9-gcccore-11.3.0.md)  
[zstd 1.5.2  (GCCcore-11.3.0)](zstd-1.5.2-gcccore-11.3.0.md)  
[< Software](../software_shortlist.md)  
