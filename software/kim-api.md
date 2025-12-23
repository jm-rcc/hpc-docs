[List of Software](../software_shortlist.md)  
# kim-api  
![Static Badge](https://img.shields.io/badge/class-chem-D7D1CC)  
## Homepage  
[https://openkim.org/](https://openkim.org/)  
## Installed versions  
  
| Version | Toolchain | Module | Architecture 
| :--------- | :--- | :--- | ---: |  
 | kim-api 2.3.0 | GCC-12.3.0 | [kim-api/2.3.0-gcc-12.3.0](../modules/kim-api-2.3.0-gcc-12.3.0.md) | ![Static Badge](https://img.shields.io/badge/epyc3--A100-ADA9A6) ![Static Badge](https://img.shields.io/badge/epyc3--H100-4085C6) <br> ![Static Badge](https://img.shields.io/badge/epyc3--L40-BB9D65) ![Static Badge](https://img.shields.io/badge/epyc3--mi210-FBB800) ![Static Badge](https://img.shields.io/badge/epyc3-D7D1CC) ![Static Badge](https://img.shields.io/badge/epyc4--A16-999490) <br> ![Static Badge](https://img.shields.io/badge/epyc4--L40s-2EA836) ![Static Badge](https://img.shields.io/badge/epyc4-D6D4D3) ![Static Badge](https://img.shields.io/badge/xeonsp4--H100-00A2C7) ![Static Badge](https://img.shields.io/badge/xeonsp4-C2BFBC)  |  
 | kim-api 2.2.1 | GCC-10.3.0 | [kim-api/2.2.1-gcc-10.3.0](../modules/kim-api-2.2.1-gcc-10.3.0.md) | ![Static Badge](https://img.shields.io/badge/epyc3--A100-ADA9A6) ![Static Badge](https://img.shields.io/badge/epyc3--H100-4085C6) <br> ![Static Badge](https://img.shields.io/badge/epyc3--L40-BB9D65) ![Static Badge](https://img.shields.io/badge/epyc3--mi210-FBB800) ![Static Badge](https://img.shields.io/badge/epyc3-D7D1CC) ![Static Badge](https://img.shields.io/badge/epyc4--A16-999490) <br> ![Static Badge](https://img.shields.io/badge/epyc4--L40s-2EA836) ![Static Badge](https://img.shields.io/badge/epyc4--mi210%2Fepyc4--mi300x-EB602B) <br> ![Static Badge](https://img.shields.io/badge/epyc4-D6D4D3)  |  
  
Open Knowledgebase of Interatomic Models.

KIM is an API and OpenKIM is a collection of interatomic models (potentials) for
atomistic simulations.  This is a library that can be used by simulation programs
to get access to the models in the OpenKIM database.

This EasyBuild only installs the API, the models can be installed with the
package openkim-models, or the user can install them manually by running
    kim-api-collections-management install user MODELNAME
or
    kim-api-collections-management install user OpenKIM
to install them all.  
  
----  
  
