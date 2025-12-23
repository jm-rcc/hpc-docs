# PMIx 4.1.2  
![Static Badge](https://img.shields.io/badge/class-lib-D7D1CC)  
  
  
Process Management for Exascale Environments
PMI Exascale (PMIx) represents an attempt to
provide an extended version of the PMI standard specifically designed
to support clusters up to and including exascale sizes. The overall
objective of the project is not to branch the existing pseudo-standard
definitions - in fact, PMIx fully supports both of the existing PMI-1
and PMI-2 APIs - but rather to (a) augment and extend those APIs to
eliminate some current restrictions that impact scalability, and (b)
provide a reference implementation of the PMI-server that demonstrates
the desired level of scalability.
  
  
  
### Usage  
To use the module on Bunya, load it with the command  
  **`module load pmix/.4.1.2-gcccore-11.3.0`**.  
  
### Toolchain  
GCCcore (11.3.0)  
  
### Toolchain Options  
{'pic': True}  
  
  
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
[libevent 2.1.12  (GCCcore 11.3.0)](link)  
[zlib 1.2.12  (GCCcore 11.3.0)](link)  
[hwloc 2.7.1  (GCCcore 11.3.0)](link)  
  
## Homepage  
The homepage for PMIx 4.1.2 .  
[https://pmix.org/](https://pmix.org/)  
