[List of Software](../software_shortlist.md)  
# numactl 2.0.18  
![Static Badge](https://img.shields.io/badge/class-tools-D7D1CC)  
  
  

 The numactl program allows you to run your application program on specific
 cpu's and memory nodes. It does this by supplying a NUMA memory policy to
 the operating system before running your program. The libnuma library provides
 convenient ways for you to add NUMA memory policies into your own program.
  
  
  
## Homepage  
The homepage for numactl 2.0.18   
[https://github.com/numactl/numactl](https://github.com/numactl/numactl)  
### Usage  
To use the module on Bunya, load it with this command:  
  **`module load numactl/.2.0.18-gcccore-13.3.0`**  
  
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
numactl depends on the following modules, and they will be loaded automatically with this module.  
  
(none)  
  
## Loaded by  
The following modules will load numactl as dependency.  
  
[UCX 1.16.0  (GCCcore-13.3.0)](ucx-1.16.0-gcccore-13.3.0.md)  
[hwloc 2.10.0  (GCCcore-13.3.0)](hwloc-2.10.0-gcccore-13.3.0.md)  
[libfabric 1.21.0  (GCCcore-13.3.0)](libfabric-1.21.0-gcccore-13.3.0.md)  
  
