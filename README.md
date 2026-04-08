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



<section class="usage">

## Usage

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-iter@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { arcsine, bernoulli, beta, betaprime, binomial, boxMuller, cauchy, chi, chisquare, cosine, discreteUniform, erlang, exponential, f, frechet, gamma, geometric, gumbel, hypergeometric, improvedZiggurat, invgamma, kumaraswamy, laplace, levy, logistic, lognormal, minstd, minstdShuffle, mt19937, negativeBinomial, normal, pareto1, poisson, randi, randn, randu, rayleigh, t, triangular, uniform, weibull } from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-iter@deno/mod.js';
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
import roundn from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-roundn@deno/mod.js';
import mean from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-strided-mean@deno/mod.js';
import iter from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-iter@deno/mod.js';

var initialPrice = 100.0;
var currentPrice = initialPrice;
var numDays = 30;
var volatility = 0.02; // 2% daily volatility

// Create iterator for random price movements:
var priceIter = iter.normal( 0.0, volatility );
var prices = [ initialPrice ];
var dailyReturns = [];

// Simulate price movements:
var change;
var i;
for ( i = 0; i < numDays; i++ ) {
    change = priceIter.next().value;
    currentPrice *= ( 1.0 + change );
    prices.push( roundn( currentPrice, -2 ) );
    dailyReturns.push( change * 100.0 );
}

// Calculate summary statistics:
var totalReturn = ( ( currentPrice - initialPrice ) / initialPrice ) * 100.0;
var avgReturn = mean( numDays, dailyReturns, 1 );

// Print results:
console.log( 'Stock Price Simulation Results:' );
console.log( '-------------------------------' );
console.log( 'Initial Price: $%d', initialPrice );
console.log( 'Final Price: $%d', roundn( currentPrice, -2 ) );
console.log( 'Total Return: %d%', roundn( totalReturn, -2 ) );
console.log( 'Average Daily Return: %d%', roundn( avgReturn, -2 ) );
console.log( '\nPrice History:' );
console.log( prices.join( ' → ' ) );
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

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-iter.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-iter

[test-image]: https://github.com/stdlib-js/random-iter/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/random-iter/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-iter/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-iter?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-iter.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-iter/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-iter/tree/deno
[deno-readme]: https://github.com/stdlib-js/random-iter/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/random-iter/tree/umd
[umd-readme]: https://github.com/stdlib-js/random-iter/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/random-iter/tree/esm
[esm-readme]: https://github.com/stdlib-js/random-iter/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/random-iter/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-iter/main/LICENSE

<!-- <toc-links> -->

[@stdlib/random/iter/arcsine]: https://github.com/stdlib-js/random-iter-arcsine/tree/deno

[@stdlib/random/iter/bernoulli]: https://github.com/stdlib-js/random-iter-bernoulli/tree/deno

[@stdlib/random/iter/beta]: https://github.com/stdlib-js/random-iter-beta/tree/deno

[@stdlib/random/iter/betaprime]: https://github.com/stdlib-js/random-iter-betaprime/tree/deno

[@stdlib/random/iter/binomial]: https://github.com/stdlib-js/random-iter-binomial/tree/deno

[@stdlib/random/iter/box-muller]: https://github.com/stdlib-js/random-iter-box-muller/tree/deno

[@stdlib/random/iter/cauchy]: https://github.com/stdlib-js/random-iter-cauchy/tree/deno

[@stdlib/random/iter/chi]: https://github.com/stdlib-js/random-iter-chi/tree/deno

[@stdlib/random/iter/chisquare]: https://github.com/stdlib-js/random-iter-chisquare/tree/deno

[@stdlib/random/iter/cosine]: https://github.com/stdlib-js/random-iter-cosine/tree/deno

[@stdlib/random/iter/discrete-uniform]: https://github.com/stdlib-js/random-iter-discrete-uniform/tree/deno

[@stdlib/random/iter/erlang]: https://github.com/stdlib-js/random-iter-erlang/tree/deno

[@stdlib/random/iter/exponential]: https://github.com/stdlib-js/random-iter-exponential/tree/deno

[@stdlib/random/iter/f]: https://github.com/stdlib-js/random-iter-f/tree/deno

[@stdlib/random/iter/frechet]: https://github.com/stdlib-js/random-iter-frechet/tree/deno

[@stdlib/random/iter/gamma]: https://github.com/stdlib-js/random-iter-gamma/tree/deno

[@stdlib/random/iter/geometric]: https://github.com/stdlib-js/random-iter-geometric/tree/deno

[@stdlib/random/iter/gumbel]: https://github.com/stdlib-js/random-iter-gumbel/tree/deno

[@stdlib/random/iter/hypergeometric]: https://github.com/stdlib-js/random-iter-hypergeometric/tree/deno

[@stdlib/random/iter/improved-ziggurat]: https://github.com/stdlib-js/random-iter-improved-ziggurat/tree/deno

[@stdlib/random/iter/invgamma]: https://github.com/stdlib-js/random-iter-invgamma/tree/deno

[@stdlib/random/iter/kumaraswamy]: https://github.com/stdlib-js/random-iter-kumaraswamy/tree/deno

[@stdlib/random/iter/laplace]: https://github.com/stdlib-js/random-iter-laplace/tree/deno

[@stdlib/random/iter/levy]: https://github.com/stdlib-js/random-iter-levy/tree/deno

[@stdlib/random/iter/logistic]: https://github.com/stdlib-js/random-iter-logistic/tree/deno

[@stdlib/random/iter/lognormal]: https://github.com/stdlib-js/random-iter-lognormal/tree/deno

[@stdlib/random/iter/minstd-shuffle]: https://github.com/stdlib-js/random-iter-minstd-shuffle/tree/deno

[@stdlib/random/iter/minstd]: https://github.com/stdlib-js/random-iter-minstd/tree/deno

[@stdlib/random/iter/mt19937]: https://github.com/stdlib-js/random-iter-mt19937/tree/deno

[@stdlib/random/iter/negative-binomial]: https://github.com/stdlib-js/random-iter-negative-binomial/tree/deno

[@stdlib/random/iter/normal]: https://github.com/stdlib-js/random-iter-normal/tree/deno

[@stdlib/random/iter/pareto-type1]: https://github.com/stdlib-js/random-iter-pareto-type1/tree/deno

[@stdlib/random/iter/poisson]: https://github.com/stdlib-js/random-iter-poisson/tree/deno

[@stdlib/random/iter/randi]: https://github.com/stdlib-js/random-iter-randi/tree/deno

[@stdlib/random/iter/randn]: https://github.com/stdlib-js/random-iter-randn/tree/deno

[@stdlib/random/iter/randu]: https://github.com/stdlib-js/random-iter-randu/tree/deno

[@stdlib/random/iter/rayleigh]: https://github.com/stdlib-js/random-iter-rayleigh/tree/deno

[@stdlib/random/iter/t]: https://github.com/stdlib-js/random-iter-t/tree/deno

[@stdlib/random/iter/triangular]: https://github.com/stdlib-js/random-iter-triangular/tree/deno

[@stdlib/random/iter/uniform]: https://github.com/stdlib-js/random-iter-uniform/tree/deno

[@stdlib/random/iter/weibull]: https://github.com/stdlib-js/random-iter-weibull/tree/deno

<!-- </toc-links> -->

</section>

<!-- /.links -->
