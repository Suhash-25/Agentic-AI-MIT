FROM python:3.11-slim

WORKDIR /app

# Install system dependencies if required
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Create application user
RUN adduser --disabled-password --gecos "" myuser

# Copy application files with ownership
COPY --chown=myuser:myuser . .

# Ensure app directory permissions
RUN chown -R myuser:myuser /app

USER myuser
ENV PATH="/home/myuser/.local/bin:$PATH"
ENV PORT=8080

EXPOSE 8080

CMD ["sh", "-c", "uvicorn main:app --host 0.0.0.0 --port ${PORT}"]
