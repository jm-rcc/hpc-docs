[List of Software](../software_shortlist.md)  
# MDI  
![Static Badge](https://img.shields.io/badge/class-chem-D7D1CC)  
## Homepage  
[https://github.com/MolSSI-MDI/MDI_Library](https://github.com/MolSSI-MDI/MDI_Library)  
## Installed versions  
  
| Version | Toolchain | Module | Architecture 
| :--------- | :--- | :--- | ---: |  
 | MDI 1.4.26 | gompi-2023a | [mdi/1.4.26-gompi-2023a](../modules/mdi-1.4.26-gompi-2023a.md) | ![Static Badge](https://img.shields.io/badge/epyc3--A100-ADA9A6) ![Static Badge](https://img.shields.io/badge/epyc3--H100-4085C6) <br> ![Static Badge](https://img.shields.io/badge/epyc3--L40-BB9D65) ![Static Badge](https://img.shields.io/badge/epyc3--mi210-FBB800) ![Static Badge](https://img.shields.io/badge/epyc3-D7D1CC) ![Static Badge](https://img.shields.io/badge/epyc4--A16-999490) <br> ![Static Badge](https://img.shields.io/badge/epyc4--L40s-2EA836) ![Static Badge](https://img.shields.io/badge/epyc4-D6D4D3) ![Static Badge](https://img.shields.io/badge/xeonsp4--H100-00A2C7) ![Static Badge](https://img.shields.io/badge/xeonsp4-C2BFBC)  |  
  
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
  
----  
  
