[< Software](../software_shortlist.md)  
# kim-api  
Category: ['gffcompare/0.12.2-gcc-10.3.0', '/sw/auto/rocky8d/xeonsp4/modules/all/gffcompare/0.12.2-gcc-10.3.0']  
## Homepage  
[https://openkim.org/](https://openkim.org/)  
## Installed versions  
  
| Version | Toolchain | Options | Module |  
| :--------- | :--- | :--- |  
 | [kim-api 2.3.0](../modules/kim-api-2.3.0-gcc-12.3.0.md) | GCC-12.3.0 |  | kim-api/2.3.0-gcc-12.3.0 |  
 | [kim-api 2.2.1](../modules/kim-api-2.2.1-gcc-10.3.0.md) | GCC-10.3.0 |  | kim-api/2.2.1-gcc-10.3.0 |  
  
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
  
