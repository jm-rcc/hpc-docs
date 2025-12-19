# QuantumESPRESSO 7.1  
(chem)  
  
  
Quantum ESPRESSO  is an integrated suite of computer codes
for electronic-structure calculations and materials modeling at the nanoscale.
It is based on density-functional theory, plane waves, and pseudopotentials
(both norm-conserving and ultrasoft).  
  
  
### Toolchain  
{'name': 'foss', 'version': '2022a'}  
  
### Toolchain Options  
{'usempi': True, 'openmp': True}  
  
  
### Usage  
Use the command **`module load quantumespresso/7.1-foss-2022a`** to load the module on Bunya.  
  
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
dependencies = [('M4', '1.4.19')]

dependencies = [
    ('HDF5', '1.12.2'),
    ('ELPA', '2021.11.001'),
    ('libxc', '5.2.3'),
]  
  
