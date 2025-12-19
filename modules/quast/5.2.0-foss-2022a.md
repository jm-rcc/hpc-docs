# QUAST 5.2.0  
(bio)  
  
  
QUAST evaluates genome assemblies by computing various metrics.
It works both with and without reference genomes. The tool accepts multiple
assemblies, thus is suitable for comparison.  
  
  
### Toolchain  
{'name': 'foss', 'version': '2022a'}  
  
### Toolchain Options  
{'pic': True}  
  
  
### Usage  
Use the command **`module load quast/5.2.0-foss-2022a`** to load the module on Bunya.  
  
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
dependencies = [
    ('Python', '3.10.4'),
    ('Perl', '5.34.1'),
    ('matplotlib', '3.5.2'),
    ('Java', '11', '', SYSTEM),
    ('Boost', '1.79.0'),
]  
  
