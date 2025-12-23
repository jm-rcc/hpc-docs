# MDI 1.4.26  
![Static Badge](https://img.shields.io/badge/class-chem-D7D1CC)  
  
  
The MolSSI Driver Interface (MDI) project provides a
standardized API for fast, on-the-fly communication between computational
chemistry codes. This greatly simplifies the process of implementing
methods that require the cooperation of multiple software packages and
enables developers to write a single implementation that works across
many different codes. The API is sufficiently general to support a wide
variety of techniques, including QM/MM, ab initio MD, machine learning,
advanced sampling, and path integral MD, while also being straightforwardly
extensible. Communication between codes is handled by the MDI Library, which
enables tight coupling between codes using either the MPI or TCP/IP methods.
  
  
  
### Usage  
To use the module on Bunya, load it with the command  
  **`module load mdi/1.4.26-gompi-2023a`**.  
  
### Toolchain  
gompi (2023a)  
  
### Toolchain Options  
None  
  
  
## Available on architecture types  
- epyc3 a100  
- epyc3 h100  
- epyc3 l40  
- epyc3 mi210  
- epyc3  
- epyc4 a16  
- epyc4 l40s  
- epyc4  
- xeonsp4 h100  
- xeonsp4  
  
  
## Dependencies  
[Python 3.11.3  (GCCcore 12.3.0)](link)  
  
## Homepage  
The homepage for MDI 1.4.26 .  
[https://github.com/MolSSI-MDI/MDI_Library](https://github.com/MolSSI-MDI/MDI_Library)  
