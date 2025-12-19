# SeqLib 1.2.0  
(bio)  
  
  
C++ interface to HTSlib, BWA-MEM and Fermi.  
  
  
### Toolchain  
{'name': 'GCC', 'version': '10.3.0'}  
  
### Toolchain Options  
None  
  
  
### Usage  
Use the command **`module load seqlib/1.2.0-gcc-10.3.0`** to load the module on Bunya.  
  
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
  
  
## Dependencies  
dependencies = [('Autotools', '20210128')]

dependencies = [
    ('zlib', '1.2.11'),
    ('XZ', '5.2.5'),
    ('bzip2', '1.0.8'),
    ('JsonCpp', '1.9.4'),
    ('BWA', '0.7.17'),
    ('HTSlib', '1.12'),
    ('fermi-lite', '20190320'),
    ('SSW', '1.1'),
    ('PCRE', '8.44'),
]  
  
