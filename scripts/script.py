import csv
import json

def csv_to_json(csv_file, json_file):
    # Read CSV data and convert it to a list of dictionaries
    with open(csv_file, 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        data = [row for row in reader]

    # Write the data to a JSON file
    with open(json_file, 'w') as jsonfile:
        json.dump(data, jsonfile, indent=4)

if __name__ == "__main__":
    # Replace 'input.csv' with the path of your CSV file
    csv_file_path = './scripts/dataMember.csv'
    
    # Replace 'output.json' with the desired path for the JSON output file
    json_file_path = './scripts/dataMember.json'

    csv_to_json(csv_file_path, json_file_path)
