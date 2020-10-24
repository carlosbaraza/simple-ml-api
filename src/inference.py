from transformers import pipeline

classifier = pipeline('sentiment-analysis')


def sentiment_analysis(text: str):
    result = classifier(
        text)
    return result
