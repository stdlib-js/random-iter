<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Pseudorandom Number Generator Iterators

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Pseudorandom number generator (PRNG) iterators.

<section class="installation">

## Installation

```bash
npm install @stdlib/random-iter
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/random-iter' );
```

#### ns

Namespace containing pseudorandom number generator (PRNG) iterators.

```javascript
var iterators = ns;
// returns {...}
```

The namespace contains the following functions for creating iterator protocol-compliant iterators:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`arcsine( a, b[, options] )`][@stdlib/random/iter/arcsine]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from an arcsine distribution.</span>
-   <span class="signature">[`bernoulli( p[, options] )`][@stdlib/random/iter/bernoulli]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Bernoulli distribution.</span>
-   <span class="signature">[`beta( alpha, beta[, options] )`][@stdlib/random/iter/beta]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a beta distribution.</span>
-   <span class="signature">[`betaprime( alpha, beta[, options] )`][@stdlib/random/iter/betaprime]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a beta prime distribution.</span>
-   <span class="signature">[`binomial( n, p[, options] )`][@stdlib/random/iter/binomial]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a binomial distribution.</span>
-   <span class="signature">[`boxMuller( [options] )`][@stdlib/random/iter/box-muller]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a standard normal distribution using the Box-Muller transform.</span>
-   <span class="signature">[`cauchy( x0, gamma[, options] )`][@stdlib/random/iter/cauchy]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Cauchy distribution.</span>
-   <span class="signature">[`chi( k[, options] )`][@stdlib/random/iter/chi]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a chi distribution.</span>
-   <span class="signature">[`chisquare( k[, options] )`][@stdlib/random/iter/chisquare]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a chi-square distribution.</span>
-   <span class="signature">[`cosine( mu, s[, options] )`][@stdlib/random/iter/cosine]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a raised cosine distribution.</span>
-   <span class="signature">[`discreteUniform( a, b[, options] )`][@stdlib/random/iter/discrete-uniform]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a discrete uniform distribution.</span>
-   <span class="signature">[`erlang( k, lambda[, options] )`][@stdlib/random/iter/erlang]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from an Erlang distribution.</span>
-   <span class="signature">[`exponential( lambda[, options] )`][@stdlib/random/iter/exponential]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from an exponential distribution.</span>
-   <span class="signature">[`f( d1, d2[, options] )`][@stdlib/random/iter/f]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from an F distribution.</span>
-   <span class="signature">[`frechet( alpha, s, m[, options] )`][@stdlib/random/iter/frechet]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Fréchet distribution.</span>
-   <span class="signature">[`gamma( alpha, beta[, options] )`][@stdlib/random/iter/gamma]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a gamma distribution.</span>
-   <span class="signature">[`geometric( p[, options] )`][@stdlib/random/iter/geometric]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a geometric distribution.</span>
-   <span class="signature">[`gumbel( mu, beta[, options] )`][@stdlib/random/iter/gumbel]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Gumbel distribution.</span>
-   <span class="signature">[`hypergeometric( N, K, n[, options] )`][@stdlib/random/iter/hypergeometric]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a hypergeometric distribution.</span>
-   <span class="signature">[`improvedZiggurat( [options] )`][@stdlib/random/iter/improved-ziggurat]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a standard normal distribution using the Improved Ziggurat algorithm.</span>
-   <span class="signature">[`invgamma( alpha, beta[, options] )`][@stdlib/random/iter/invgamma]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from an inverse gamma distribution.</span>
-   <span class="signature">[`kumaraswamy( a, b[, options] )`][@stdlib/random/iter/kumaraswamy]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Kumaraswamy's double bounded distribution.</span>
-   <span class="signature">[`laplace( mu, b[, options] )`][@stdlib/random/iter/laplace]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Laplace (double exponential) distribution.</span>
-   <span class="signature">[`levy( mu, c[, options] )`][@stdlib/random/iter/levy]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Lévy distribution.</span>
-   <span class="signature">[`logistic( mu, s[, options] )`][@stdlib/random/iter/logistic]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a logistic distribution.</span>
-   <span class="signature">[`lognormal( mu, sigma[, options] )`][@stdlib/random/iter/lognormal]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a lognormal distribution.</span>
-   <span class="signature">[`minstdShuffle( [options] )`][@stdlib/random/iter/minstd-shuffle]</span><span class="delimiter">: </span><span class="description">create an iterator for a linear congruential pseudorandom number generator (LCG) whose output is shuffled.</span>
-   <span class="signature">[`minstd( [options] )`][@stdlib/random/iter/minstd]</span><span class="delimiter">: </span><span class="description">create an iterator for a linear congruential pseudorandom number generator (LCG) based on Park and Miller.</span>
-   <span class="signature">[`mt19937( [options] )`][@stdlib/random/iter/mt19937]</span><span class="delimiter">: </span><span class="description">create an iterator for a 32-bit Mersenne Twister pseudorandom number generator.</span>
-   <span class="signature">[`negativeBinomial( r, p[, options] )`][@stdlib/random/iter/negative-binomial]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a negative binomial distribution.</span>
-   <span class="signature">[`normal( mu, sigma[, options] )`][@stdlib/random/iter/normal]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a normal distribution.</span>
-   <span class="signature">[`pareto1( alpha, beta[, options] )`][@stdlib/random/iter/pareto-type1]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Pareto (Type I) distribution.</span>
-   <span class="signature">[`poisson( lambda[, options] )`][@stdlib/random/iter/poisson]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Poisson distribution.</span>
-   <span class="signature">[`randi( [options] )`][@stdlib/random/iter/randi]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers having integer values.</span>
-   <span class="signature">[`randn( [options] )`][@stdlib/random/iter/randn]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a standard normal distribution.</span>
-   <span class="signature">[`randu( [options] )`][@stdlib/random/iter/randu]</span><span class="delimiter">: </span><span class="description">create an iterator for generating uniformly distributed pseudorandom numbers between `0` and `1`.</span>
-   <span class="signature">[`rayleigh( sigma[, options] )`][@stdlib/random/iter/rayleigh]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Rayleigh distribution.</span>
-   <span class="signature">[`t( v[, options] )`][@stdlib/random/iter/t]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Student's t distribution.</span>
-   <span class="signature">[`triangular( a, b, c[, options] )`][@stdlib/random/iter/triangular]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a triangular distribution.</span>
-   <span class="signature">[`uniform( a, b[, options] )`][@stdlib/random/iter/uniform]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a continuous uniform distribution.</span>
-   <span class="signature">[`weibull( k, lambda[, options] )`][@stdlib/random/iter/weibull]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Weibull distribution.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var ns = require( '@stdlib/random-iter' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-iter.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-iter

[test-image]: https://github.com/stdlib-js/random-iter/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/random-iter/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-iter/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-iter?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-iter.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-iter/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-iter/tree/deno
[umd-url]: https://github.com/stdlib-js/random-iter/tree/umd
[esm-url]: https://github.com/stdlib-js/random-iter/tree/esm
[branches-url]: https://github.com/stdlib-js/random-iter/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-iter/main/LICENSE

<!-- <toc-links> -->

[@stdlib/random/iter/arcsine]: https://github.com/stdlib-js/random-iter-arcsine

[@stdlib/random/iter/bernoulli]: https://github.com/stdlib-js/random-iter-bernoulli

[@stdlib/random/iter/beta]: https://github.com/stdlib-js/random-iter-beta

[@stdlib/random/iter/betaprime]: https://github.com/stdlib-js/random-iter-betaprime

[@stdlib/random/iter/binomial]: https://github.com/stdlib-js/random-iter-binomial

[@stdlib/random/iter/box-muller]: https://github.com/stdlib-js/random-iter-box-muller

[@stdlib/random/iter/cauchy]: https://github.com/stdlib-js/random-iter-cauchy

[@stdlib/random/iter/chi]: https://github.com/stdlib-js/random-iter-chi

[@stdlib/random/iter/chisquare]: https://github.com/stdlib-js/random-iter-chisquare

[@stdlib/random/iter/cosine]: https://github.com/stdlib-js/random-iter-cosine

[@stdlib/random/iter/discrete-uniform]: https://github.com/stdlib-js/random-iter-discrete-uniform

[@stdlib/random/iter/erlang]: https://github.com/stdlib-js/random-iter-erlang

[@stdlib/random/iter/exponential]: https://github.com/stdlib-js/random-iter-exponential

[@stdlib/random/iter/f]: https://github.com/stdlib-js/random-iter-f

[@stdlib/random/iter/frechet]: https://github.com/stdlib-js/random-iter-frechet

[@stdlib/random/iter/gamma]: https://github.com/stdlib-js/random-iter-gamma

[@stdlib/random/iter/geometric]: https://github.com/stdlib-js/random-iter-geometric

[@stdlib/random/iter/gumbel]: https://github.com/stdlib-js/random-iter-gumbel

[@stdlib/random/iter/hypergeometric]: https://github.com/stdlib-js/random-iter-hypergeometric

[@stdlib/random/iter/improved-ziggurat]: https://github.com/stdlib-js/random-iter-improved-ziggurat

[@stdlib/random/iter/invgamma]: https://github.com/stdlib-js/random-iter-invgamma

[@stdlib/random/iter/kumaraswamy]: https://github.com/stdlib-js/random-iter-kumaraswamy

[@stdlib/random/iter/laplace]: https://github.com/stdlib-js/random-iter-laplace

[@stdlib/random/iter/levy]: https://github.com/stdlib-js/random-iter-levy

[@stdlib/random/iter/logistic]: https://github.com/stdlib-js/random-iter-logistic

[@stdlib/random/iter/lognormal]: https://github.com/stdlib-js/random-iter-lognormal

[@stdlib/random/iter/minstd-shuffle]: https://github.com/stdlib-js/random-iter-minstd-shuffle

[@stdlib/random/iter/minstd]: https://github.com/stdlib-js/random-iter-minstd

[@stdlib/random/iter/mt19937]: https://github.com/stdlib-js/random-iter-mt19937

[@stdlib/random/iter/negative-binomial]: https://github.com/stdlib-js/random-iter-negative-binomial

[@stdlib/random/iter/normal]: https://github.com/stdlib-js/random-iter-normal

[@stdlib/random/iter/pareto-type1]: https://github.com/stdlib-js/random-iter-pareto-type1

[@stdlib/random/iter/poisson]: https://github.com/stdlib-js/random-iter-poisson

[@stdlib/random/iter/randi]: https://github.com/stdlib-js/random-iter-randi

[@stdlib/random/iter/randn]: https://github.com/stdlib-js/random-iter-randn

[@stdlib/random/iter/randu]: https://github.com/stdlib-js/random-iter-randu

[@stdlib/random/iter/rayleigh]: https://github.com/stdlib-js/random-iter-rayleigh

[@stdlib/random/iter/t]: https://github.com/stdlib-js/random-iter-t

[@stdlib/random/iter/triangular]: https://github.com/stdlib-js/random-iter-triangular

[@stdlib/random/iter/uniform]: https://github.com/stdlib-js/random-iter-uniform

[@stdlib/random/iter/weibull]: https://github.com/stdlib-js/random-iter-weibull

<!-- </toc-links> -->

</section>

<!-- /.links -->
