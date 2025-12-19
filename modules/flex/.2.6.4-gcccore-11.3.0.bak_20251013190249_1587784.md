# flex 2.6.4  
(lang)  
  
  
Flex (Fast Lexical Analyzer) is a tool for generating scanners. A scanner,
 sometimes called a tokenizer, is a program which recognizes lexical patterns
 in text.  
  
  
### Toolchain  
{'name': 'GCCcore', 'version': '11.3.0'}  
  
### Toolchain Options  
{'pic': True}  
  
  
### Usage  
Use the command **`module load flex/.2.6.4-gcccore-11.3.0.bak_20251013190249_1587784`** to load the module on Bunya.  
  
## Available on architecture types  
- epyc3 mi210  
  
  
## Dependencies  
dependencies = [
    ('Bison', '3.8.2'),
    ('help2man', '1.49.2'),
    # use same binutils version that was used when building GCC toolchain
    ('binutils', '2.38', '', SYSTEM),
]  
  
