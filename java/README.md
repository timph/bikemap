# Java

* We recommend that you use the [jsoniter] library
  to manipulate JSON as unstructured objects.
  However, you may use any JSON library you like.
* See [App.java] for an implementation of the JSON handling
  described in the [JSON Primer].
* We recommend [OkHttp] for HTTP.

To compile and run this code with [Maven]:

```text
mvn install
mvn compile
mvn exec:java
```

See also [Fun with Any](https://www.sitepoint.com/php-style-json-parsing-in-java-with-jsoniter/#funwithany)
for more on jsoniter.

[jsoniter]: https://jsoniter.com/
[App.java]: ./src/main/java/com/stripe/interview/App.java
[JSON Primer]: ../1-json-primer.md
[OkHttp]: https://square.github.io/okhttp/
[Maven]: https://maven.apache.org/
[Fun with Any]: https://www.sitepoint.com/php-style-json-parsing-in-java-with-jsoniter/#funwithany
