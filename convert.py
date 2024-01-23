import os

def is_code_file(file_name):
    return file_name.endswith(('.js', '.jsx', '.scss'))

output_file_path = './code.txt'

with open(output_file_path, 'w') as output:
    for dir in ["./client", "./server"]:
        for root, dirs, files in os.walk(dir):
            dirs[:] = [d for d in dirs if d != 'node_modules']

            for file in files:
                if is_code_file(file):
                    path = os.path.join(root, file)
                    output.write('// ' + path + '\n\n')
                    with open(path, 'r', encoding='utf-8', errors='ignore') as ff:
                        output.write(''.join(ff.readlines()))
                    output.write('\n\n')

print(f"Code has been extracted and saved to {output_file_path}")
