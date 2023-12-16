import sqlite3
import os

# Connect to the SQLite database
conn = sqlite3.connect('wav_files.db')
cur = conn.cursor()


def retrieve_wav_file(file_name):
    # Execute the SELECT query to retrieve the BLOB file
    cur.execute('''
        SELECT wav_data, file_name
        FROM wav_files
        WHERE file_name = ?
    ''', (file_name,))

    # Fetch the result
    result = cur.fetchone()

    if result:
        # Extract the BLOB data and file name
        wav_data = result[0]
        file_name = result[1]

        # Write the BLOB data to a file
        with open(file_name, 'wb') as f:
            f.write(wav_data)

        print(f"File '{file_name}' retrieved successfully.")
    else:
        print(f"File '{file_name}' not found.")


def retrieve_all_file_names():
    # Execute the SELECT query to retrieve all file names
    cur.execute('''
        SELECT file_name
        FROM wav_files
    ''')
    # Fetch all the results
    results = cur.fetchall()

    if results:
        # Extract the file names from the results
        file_names = [result[0] for result in results]
        return file_names
    else:
        return []


file_names=retrieve_all_file_names()
for file_name in file_names:
    retrieve_wav_file(file_name)