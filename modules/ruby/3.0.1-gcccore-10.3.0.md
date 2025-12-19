# Ruby 3.0.1  
(lang)  
  
  
Ruby is a dynamic, open source programming language with
 a focus on simplicity and productivity. It has an elegant syntax that is
 natural to read and easy to write.  
  
  
### Toolchain  
{'name': 'GCCcore', 'version': '10.3.0'}  
  
### Toolchain Options  
None  
  
  
### Usage  
Use the command **`module load ruby/3.0.1-gcccore-10.3.0`** to load the module on Bunya.  
  
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
    ('binutils', '2.36.1'),  # needed for gem
    ('zlib', '1.2.11'),
    ('OpenSSL', '1.1', '', SYSTEM),
]  
  
