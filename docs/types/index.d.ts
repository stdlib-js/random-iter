/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import arcsine = require( '@stdlib/random-iter-arcsine' );
import bernoulli = require( '@stdlib/random-iter-bernoulli' );
import beta = require( '@stdlib/random-iter-beta' );
import betaprime = require( '@stdlib/random-iter-betaprime' );
import binomial = require( '@stdlib/random-iter-binomial' );
import boxMuller = require( '@stdlib/random-iter-box-muller' );
import cauchy = require( '@stdlib/random-iter-cauchy' );
import chi = require( '@stdlib/random-iter-chi' );
import chisquare = require( '@stdlib/random-iter-chisquare' );
import cosine = require( '@stdlib/random-iter-cosine' );
import discreteUniform = require( '@stdlib/random-iter-discrete-uniform' );
import erlang = require( '@stdlib/random-iter-erlang' );
import exponential = require( '@stdlib/random-iter-exponential' );
import f = require( '@stdlib/random-iter-f' );
import frechet = require( '@stdlib/random-iter-frechet' );
import gamma = require( '@stdlib/random-iter-gamma' );
import geometric = require( '@stdlib/random-iter-geometric' );
import gumbel = require( '@stdlib/random-iter-gumbel' );
import hypergeometric = require( '@stdlib/random-iter-hypergeometric' );
import improvedZiggurat = require( '@stdlib/random-iter-improved-ziggurat' );
import invgamma = require( '@stdlib/random-iter-invgamma' );
import kumaraswamy = require( '@stdlib/random-iter-kumaraswamy' );
import laplace = require( '@stdlib/random-iter-laplace' );
import levy = require( '@stdlib/random-iter-levy' );
import logistic = require( '@stdlib/random-iter-logistic' );
import lognormal = require( '@stdlib/random-iter-lognormal' );
import minstd = require( '@stdlib/random-iter-minstd' );
import minstdShuffle = require( '@stdlib/random-iter-minstd-shuffle' );
import mt19937 = require( '@stdlib/random-iter-mt19937' );
import negativeBinomial = require( '@stdlib/random-iter-negative-binomial' );
import normal = require( '@stdlib/random-iter-normal' );
import pareto1 = require( '@stdlib/random-iter-pareto-type1' );
import poisson = require( '@stdlib/random-iter-poisson' );
import randi = require( '@stdlib/random-iter-randi' );
import randn = require( '@stdlib/random-iter-randn' );
import randu = require( '@stdlib/random-iter-randu' );
import rayleigh = require( '@stdlib/random-iter-rayleigh' );
import t = require( '@stdlib/random-iter-t' );
import triangular = require( '@stdlib/random-iter-triangular' );
import uniform = require( '@stdlib/random-iter-uniform' );
import weibull = require( '@stdlib/random-iter-weibull' );

/**
* Interface describing the `iter` namespace.
*/
interface Namespace {
	/**
	* Returns an iterator for generating pseudorandom numbers drawn from an arcsine distribution.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @param options - function options
	* @throws `a` must be less than `b`
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.arcsine( 2.0, 5.0 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	arcsine: typeof arcsine;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a Bernoulli distribution.
	*
	* @param p - success probability
	* @param options - function options
	* @throws `p` must be a probability
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.bernoulli( 0.2 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	bernoulli: typeof bernoulli;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a beta distribution.
	*
	* @param alpha - first shape parameter
	* @param beta - second shape parameter
	* @param options - function options
	* @throws `alpha` must be a positive number
	* @throws `beta` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.beta( 2.0, 5.0 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	beta: typeof beta;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a beta prime distribution.
	*
	* @param alpha - first shape parameter
	* @param beta - second shape parameter
	* @param options - function options
	* @throws `alpha` must be a positive number
	* @throws `beta` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.betaprime( 2.0, 5.0 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	betaprime: typeof betaprime;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a binomial distribution.
	*
	* @param n - number of trials
	* @param p - success probability
	* @param options - function options
	* @throws `n` must be a positive integer
	* @throws `p` must be a probability
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.binomial( 10, 0.2 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	binomial: typeof binomial;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a standard normal distribution using the Box-Muller transform.
	*
	* @param options - function options
	* @param options.prng - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
	* @param options.seed - pseudorandom number generator seed
	* @param options.state - pseudorandom number generator state
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @param options.iter - number of iterations
	* @throws must provide valid options
	* @returns iterator
	*
	* @example
	* var iter = ns.boxMuller();
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	boxMuller: typeof boxMuller;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a Cauchy distribution.
	*
	* @param x0 - location parameter
	* @param gamma - scale parameter
	* @param options - function options
	* @throws `gamma` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.cauchy( -1.0, 3.0 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	cauchy: typeof cauchy;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a chi distribution.
	*
	* @param k - degrees of freedom
	* @param options - function options
	* @throws `k` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.chi( 3.0 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	chi: typeof chi;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a chi-square distribution.
	*
	* @param k - degrees of freedom
	* @param options - function options
	* @throws `k` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.chisquare( 3.0 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	chisquare: typeof chisquare;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a cosine distribution.
	*
	* @param mu - location parameter
	* @param s - scale parameter
	* @param options - function options
	* @throws `s` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.cosine( -1.0, 3.0 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	cosine: typeof cosine;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a discrete uniform distribution.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @param options - function options
	* @param options.prng - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
	* @param options.seed - pseudorandom number generator seed
	* @param options.state - pseudorandom number generator state
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @param options.iter - number of iterations
	* @throws `a` must be an integer
	* @throws `b` must be an integer
	* @throws `a` must be less than or equal to `b`
	* @throws must provide valid options
	* @returns iterator
	*
	* @example
	* var iter = ns.discreteUniform( 2, 6 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	discreteUniform: typeof discreteUniform;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from an Erlang distribution.
	*
	* @param k - shape parameter
	* @param lambda  - rate parameter
	* @param options - function options
	* @throws `k` must be a positive integer
	* @throws `lambda` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.erlang( 2, 5.0 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	erlang: typeof erlang;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from an exponential distribution.
	*
	* @param lambda - rate parameter
	* @param options - function options
	* @throws `lambda` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.exponential( 3.0 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	exponential: typeof exponential;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from an F distribution.
	*
	* @param d1 - degrees of freedom
	* @param d2 - degrees of freedom
	* @param options - function options
	* @throws `d1` must be a positive number
	* @throws `d2` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.f( 1.0, 1.0 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	f: typeof f;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a Fréchet distribution.
	*
	* @param alpha - shape parameter
	* @param s - rate parameter
	* @param options - function options
	* @throws `alpha` must be a positive number
	* @throws `s` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.frechet( 2.0, 5.0 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	frechet: typeof frechet;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a gamma distribution.
	*
	* @param alpha - shape parameter
	* @param beta - rate parameter
	* @param options - function options
	* @throws `alpha` must be a positive number
	* @throws `beta` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.gamma( 2.0, 5.0 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	gamma: typeof gamma;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a geometric distribution.
	*
	* @param p - success probability
	* @param options - function options
	* @throws `p` must be a probability
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.geometric( 0.2 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	geometric: typeof geometric;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a Gumbel distribution.
	*
	* @param mu - mean
	* @param beta - scale parameter
	* @param options - function options
	* @throws `beta` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.gumbel( -1.0, 3.0 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	gumbel: typeof gumbel;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a hypergeometric distribution.
	*
	* @param N - population size
	* @param K - subpopulation size
	* @param n - number of draws
	* @param options - function options
	* @param options.prng - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
	* @param options.seed - pseudorandom number generator seed
	* @param options.state - pseudorandom number generator state
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @param options.iter - number of iterations
	* @throws first argument must be a nonnegative integer
	* @throws second argument must be a nonnegative integer
	* @throws third argument must be a nonnegative integer
	* @throws `n` must be less than or equal to `N`
	* @throws `K` must be less than or equal to `N`
	* @throws must provide valid options
	* @returns iterator
	*
	* @example
	* var iter = ns.hypergeometric( 10, 5, 3 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	hypergeometric: typeof hypergeometric;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a standard normal distribution using the Improved Ziggurat algorithm.
	*
	* @param options - function options
	* @param options.prng - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
	* @param options.seed - pseudorandom number generator seed
	* @param options.state - pseudorandom number generator state
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @param options.iter - number of iterations
	* @throws must provide valid options
	* @returns iterator
	*
	* @example
	* var iter = ns.improvedZiggurat();
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	improvedZiggurat: typeof improvedZiggurat;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from an inverse gamma distribution.
	*
	* @param alpha - shape parameter
	* @param beta  - scale parameter
	* @param options - function options
	* @throws `alpha` must be a positive number
	* @throws `beta` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.invgamma( 2.0, 5.0 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	invgamma: typeof invgamma;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a Kumaraswamy's double bounded distribution.
	*
	* @param a - first shape parameter
	* @param b  - second shape parameter
	* @param options - function options
	* @throws `a` must be a positive number
	* @throws `b` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.kumaraswamy( 2.0, 5.0 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	kumaraswamy: typeof kumaraswamy;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a Laplace distribution.
	*
	* @param mu - mean
	* @param b - scale parameter
	* @param options - function options
	* @throws `b` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.laplace( -1.0, 3.0 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	laplace: typeof laplace;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a Lévy distribution.
	*
	* @param mu - mean
	* @param c - scale parameter
	* @param options - function options
	* @throws `c` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.levy( -1.0, 3.0 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	levy: typeof levy;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a logistic distribution.
	*
	* @param mu - mean
	* @param s - scale parameter
	* @param options - function options
	* @throws `s` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.logistic( -1.0, 3.0 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	logistic: typeof logistic;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a lognormal distribution.
	*
	* @param mu - location parameter
	* @param sigma - scale parameter
	* @param options - function options
	* @throws `sigma` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.lognormal( -1.0, 3.0 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	lognormal: typeof lognormal;

	/**
	* Returns an iterator for generating pseudorandom numbers via a linear congruential pseudorandom number generator (LCG) based on Park and Miller.
	*
	* @param options - function options
	* @param options.normalized - boolean indicating whether to return pseudorandom numbers on the interval `[0,1)` (default: false)
	* @param options.seed - pseudorandom number generator seed
	* @param options.state - pseudorandom number generator state
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @param options.iter - number of iterations
	* @throws must provide valid options
	* @returns iterator
	*
	* @example
	* var iter = ns.minstd();
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	minstd: typeof minstd;

	/**
	* Returns an iterator for generating pseudorandom numbers via a linear congruential pseudorandom number generator (LCG) whose output is shuffled.
	*
	* @param options - function options
	* @param options.normalized - boolean indicating whether to return pseudorandom numbers on the interval `[0,1)` (default: false)
	* @param options.seed - pseudorandom number generator seed
	* @param options.state - pseudorandom number generator state
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @param options.iter - number of iterations
	* @throws must provide valid options
	* @returns iterator
	*
	* @example
	* var iter = ns.minstdShuffle();
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	minstdShuffle: typeof minstdShuffle;

	/**
	* Returns an iterator for generating pseudorandom numbers via a 32-bit Mersenne Twister pseudorandom number generator.
	*
	* @param options - function options
	* @param options.normalized - boolean indicating whether to return pseudorandom numbers on the interval `[0,1)` (default: false)
	* @param options.seed - pseudorandom number generator seed
	* @param options.state - pseudorandom number generator state
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @param options.iter - number of iterations
	* @throws must provide valid options
	* @returns iterator
	*
	* @example
	* var iter = ns.mt19937();
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	mt19937: typeof mt19937;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a negative binomial distribution.
	*
	* @param r - number of successes until experiment is stopped
	* @param p - success probability
	* @param options - function options
	* @throws `r` must be a positive number
	* @throws `p` must be a probability
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.negativeBinomial( 10, 0.2 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	negativeBinomial: typeof negativeBinomial;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a normal distribution.
	*
	* @param mu - mean
	* @param sigma - standard deviation
	* @param options - function options
	* @throws `sigma` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.normal( -1.0, 3.0 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	normal: typeof normal;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a Pareto (Type I) distribution.
	*
	* @param alpha - shape parameter
	* @param beta - scale parameter
	* @param options - function options
	* @throws `alpha` must be a positive number
	* @throws `beta` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.pareto1( 2.0, 5.0 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	pareto1: typeof pareto1;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a Poisson distribution.
	*
	* @param lambda - mean
	* @param options - function options
	* @throws `lambda` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.poisson( 3.0 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	poisson: typeof poisson;

	/**
	* Returns an iterator for generating pseudorandom numbers having integer values.
	*
	* @param options - function options
	* @param options.name - name of a supported pseudorandom number generator (PRNG), which will serve as the underlying source of pseudorandom numbers (default: 'mt19937')
	* @param options.seed - pseudorandom number generator seed
	* @param options.state - pseudorandom number generator state
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @param options.iter - number of iterations
	* @throws must provide valid options
	* @returns iterator
	*
	* @example
	* var iter = ns.randi();
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	randi: typeof randi;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a standard normal distribution.
	*
	* @param options - function options
	* @param options.name - name of a supported pseudorandom number generator (PRNG), which will serve as the underlying source of pseudorandom numbers (default: 'improved-ziggurat')
	* @param options.prng - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
	* @param options.seed - pseudorandom number generator seed
	* @param options.state - pseudorandom number generator state
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @param options.iter - number of iterations
	* @throws must provide valid options
	* @returns iterator
	*
	* @example
	* var iter = ns.randn();
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	randn: typeof randn;

	/**
	* Returns an iterator for generating uniformly distributed pseudorandom numbers between 0 and 1.
	*
	* @param options - function options
	* @param options.name - name of a supported pseudorandom number generator (PRNG), which will serve as the underlying source of pseudorandom numbers (default: 'mt19937')
	* @param options.seed - pseudorandom number generator seed
	* @param options.state - pseudorandom number generator state
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @param options.iter - number of iterations
	* @throws must provide valid options
	* @returns iterator
	*
	* @example
	* var iter = ns.randu();
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	randu: typeof randu;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a Rayleigh distribution.
	*
	* @param sigma - scale parameter
	* @param options - function options
	* @throws `sigma` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.rayleigh( 3.0 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	rayleigh: typeof rayleigh;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a Student's t distribution.
	*
	* @param v - degrees of freedom
	* @param options - function options
	* @throws `v` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.t( 3.0 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	t: typeof t;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a triangular distribution.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @param c - mode
	* @param options - function options
	* @param options.prng - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
	* @param options.seed - pseudorandom number generator seed
	* @param options.state - pseudorandom number generator state
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @param options.iter - number of iterations
	* @throws arguments must satisfy `a <= c <= b`
	* @throws must provide valid options
	* @returns iterator
	*
	* @example
	* var iter = ns.triangular( 2.0, 5.0, 3.0 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	triangular: typeof triangular;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a continuous uniform distribution.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @param options - function options
	* @throws `a` must be less than `b`
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.uniform( 2.0, 5.0 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	uniform: typeof uniform;

	/**
	* Returns an iterator for generating pseudorandom numbers drawn from a Weibull distribution.
	*
	* @param k - scale parameter
	* @param lambda  - shape parameter
	* @param options - function options
	* @throws `k` must be a positive number
	* @throws `lambda` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iter = ns.weibull( 2.0, 5.0 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	weibull: typeof weibull;
}

/**
* Pseudorandom number generator iterators.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
