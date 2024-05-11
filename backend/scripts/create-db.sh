#!/bin/bash

if [ -f "$(dirname "$0")/../.env" ]; then
    echo "Sourcing environment variables from .env file..."
    source "$(dirname "$0")/../.env"
else
    echo "Error: .env file not found"
    exit 1
fi

if [ -z "$DB_HOST" ] || [ -z "$DB_PORT" ] || [ -z "$DB_USERNAME" ] || [ -z "$DB_PASSWORD" ]; then
    echo "Error: Please set the required environment variables (DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD)"
    exit 1
fi

echo "Creating database EventsRegistrationApp..."

PGPASSWORD=$DB_PASSWORD psql -h $DB_HOST -p $DB_PORT -U $DB_USERNAME -c "CREATE DATABASE $DB_NAME;" 

if [ $? -eq 0 ]; then
    echo "Database $DB_NAME created successfully."
else
    echo "Failed to create database $DB_NAME."
    exit 1
fi
