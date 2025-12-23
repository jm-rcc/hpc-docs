[List of Software](../software_shortlist.md)  
# Kraken2 2.1.2 
![Static Badge](https://img.shields.io/badge/class-bio-D7D1CC)  
  
  
Kraken is a system for assigning taxonomic labels to short DNA sequences,
 usually obtained through metagenomic studies. Previous attempts by other
 bioinformatics software to accomplish this task have often used sequence
 alignment or machine learning techniques that were quite slow, leading to
 the development of less sensitive but much faster abundance estimation
 programs. Kraken aims to achieve high sensitivity and high speed by
 utilizing exact alignments of k-mers and a novel classification algorithm.  
  
  
## Homepage  
The homepage for Kraken2 2.1.2  
[https://github.com/DerrickWood/kraken2/wiki](https://github.com/DerrickWood/kraken2/wiki)  
### Usage  
To use this module on Bunya, load it with this command:  
  **`module load kraken2/2.1.2-gompi-2022a`**  
  
### Toolchain  
gompi-2022a  
  
### Toolchain Options  
openmp: True  
cstd: c++11  
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
Kraken2 depends on the following modules, and they will be loaded automatically with this module.  
  
[Perl 5.34.1  (GCCcore-11.3.0)](perl-5.34.1-gcccore-11.3.0.md)  
[BLAST+ 2.13.0  (gompi-2022a)](blast+-2.13.0-gompi-2022a.md)  
[wget 1.21.3  (GCCcore-11.3.0)](wget-1.21.3-gcccore-11.3.0.md)  
  
  
## Other available modules  
These other versions of Kraken2 are available on Bunya.  
[kraken2/2.1.2-gompi-2022a](../modules/kraken2-2.1.2-gompi-2022a.md)  
  
[kraken2/2.1.2-gompi-2021a](../modules/kraken2-2.1.2-gompi-2021a.md)  
  
